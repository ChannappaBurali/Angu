import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Product } from '../model/productModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment   } from '../../environments/environment';


@Injectable()
export class ProductService  {
    /**
     *
     */
    constructor(private http: HttpClient, router: Router) {
        // super(_http, router);
    }
    public getProducts(): Observable<any> {
       // const headers =  new HttpHeaders({ 'Content-Type': 'text/json',  'Access-Control-Allow-Origin': '*' });
        return this.http.get('http://localhost:60120/api/product/getproducts')
        .pipe(map((response) => {
              return response;
        })
        );
    }

}
