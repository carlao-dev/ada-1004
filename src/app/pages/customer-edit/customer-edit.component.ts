import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit{

  myForm: FormGroup;
  id:number = -2
  isNewCustomer:boolean = true;
  // customer: Customer = {
  //   id: -1,
  //   name: "Carlao",
  //   dateOfBirth : new Date(),
  //   email: ""
  // }

  constructor (private route: ActivatedRoute){

    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateOfBirth: new FormControl('', [Validators.required])
    });

  }
  ngOnInit() {



    const getId = this.route.snapshot.paramMap.get('id');
    if (getId)
        this.id = parseInt(getId)
  }

  onSubmit(formData:Customer){
    console.log(formData)
    debugger
  }

}
