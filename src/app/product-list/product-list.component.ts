import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/productModel';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import {from } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private authenticationService: AuthenticationService) { }
  editField: string;
  public products: Product[];

  ngOnInit() {
   this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      if (response) {
        this.products = response;
      }
    }, error => console.log(error));
  }

  // edit(ProductID: string) {
  //   this.router.navigate([`/add-product/` + ProductID]);
  // }
  // addProduct(): void {
  //   this.router.navigate(['/add-product']);
  // }
  // logout() {
  //   this.router.navigate(['/log-out']);
  // }
}
