import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  id:number;
  customer: Customer;
  apiResponse: ApiResponse;

  constructor(private router:Router, private customerService:CustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.customer = new Customer();
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(
      data=>{
        console.log(data)
        this.customer= data;
      },
      error=>console.log(error));

  }

  onSubmit(){
    this.customerService.updateCustomer(this.id, this.customer).subscribe(
      data=>console.log(data), error=>console.error());
    this.customer = new Customer();
    this.router.navigate(['/customers'])
  }
}
