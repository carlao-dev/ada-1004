import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit{

  id:number = -2
  isNewCustomer:boolean = true;
  customer: Customer = {
    id: -1,
    name: "Carlao",
    dateOfBirth : new Date(),
    email: ""
  }

  constructor (private route: ActivatedRoute){

  }
  ngOnInit() {
    const getId = this.route.snapshot.paramMap.get('id');
    if (getId)
        this.id = parseInt(getId)
  }

  salvar(){
    debugger
  }

}
