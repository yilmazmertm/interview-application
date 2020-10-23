import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService:CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    this.customerService.createCustomer(this.customer).subscribe(
      data=>console.log(data), error=>console.log(error));
    this.customer = new Customer();
    this.router.navigate(['/customers'])
  }
}
