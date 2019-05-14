import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private router: Router) { }
firstName: string;
userName: string;
emailId: string;
  ngOnInit() {
  }
  onSubmit(): void {
  }
  backToHome(): void {
    this.router.navigate(['/login']);
  }
  clearForm(productForm): void {
      productForm.resetForm();
  }
}
