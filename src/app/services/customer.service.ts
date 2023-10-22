import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  customers: Customer[] = []

  constructor() {

    const customer:Customer = {
      id: 1,
      name: "Carlos",
      email: "carlos@carlos.com",
      dateOfBirth: new Date("1984-06-18")
    }

    this.customers.push(customer);

    const customer2:Customer = {
      id: 2,
      name: "Bete",
      email: "bete@bete.com",
      dateOfBirth: new Date("1984-06-30")
    }

    this.customers.push(customer2);

  }

  getList() : Customer[]{
    return this.customers;
  }

  getById(){

  }
  update(){

  }

  delete(id:number){
    this.customers = this.customers.filter(customer => customer.id !== id);
  }

  create(){

  }

}
