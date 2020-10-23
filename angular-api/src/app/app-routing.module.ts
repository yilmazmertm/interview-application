import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { CustomersListComponent } from './customer/customers-list/customers-list.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';

const routes: Routes = [
  {path:'', redirectTo:'customer', pathMatch:'full'},
  {path:'add', component:CreateCustomerComponent},
  {path:'customers', component:CustomersListComponent},
  {path:'update/:id', component:UpdateCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
