import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = []
  customerIdSelectedToDelete:number = -1

  constructor (
    private customerService: CustomerService,
    private router: Router
    ){

  }

  ngOnInit(): void {
    this.customers =  this.customerService.getList();
  }

  goToCustomerEdit(id:number){
    this.router.navigate(['customer-edit',id]);
  }

  deleteCustomer(){
    this.customerService.delete(this.customerIdSelectedToDelete);
    this.ngOnInit()
  }

  openModalConfirmDelete(id:number){
    this.customerIdSelectedToDelete = id;
  }

}
