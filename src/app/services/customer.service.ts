import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  customers: Customer[] = []

  constructor() {

    const customer:Customer = {
      id: self.crypto.randomUUID(),
      name: "Carlos",
      email: "carlos@carlos.com",
      dateOfBirth: new Date("1984-06-18")
    }

    this.customers.push(customer);

    const customer2:Customer = {
      id: self.crypto.randomUUID(),
      name: "Bete",
      email: "bete@bete.com",
      dateOfBirth: new Date("1984-06-30")
    }

    this.customers.push(customer2);

  }

  getList() : Customer[]{
    return this.customers;
  }

  getById(id: string){
    return this.customers.find( customer => customer.id === id);
  }

  update(customer: Customer){

    let searchCustomer = this.getById(customer.id);

    if( searchCustomer){
      searchCustomer.name = customer.name;
      searchCustomer.email = customer.email;
      searchCustomer.dateOfBirth = customer.dateOfBirth;
    }



  }

  delete(id:string){
    this.customers = this.customers.filter(customer => customer.id !== id);
  }

  create(customer:Customer){

    let uuid = self.crypto.randomUUID();

    customer.id = uuid;

    this.customers.push(customer)

  }

}
