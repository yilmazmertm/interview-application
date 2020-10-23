import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers:Observable<ApiResponse>;

  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();

    $(document).ready(function() {
      $('#example').DataTable( {
        paging: false,
          "order": [[ 3, "desc" ]]
      } );
  } );

  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(
      data=>{
        console.log(data);
        this.customers = this.customerService.getCustomers();
      },
      error=> console.error(error));
  }

  updateCustomer(id: number) {
    this.router.navigate(['update', id]);
  }
}
