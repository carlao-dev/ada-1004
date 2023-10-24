import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit{

  id:string = 'newCustomer';
  customerForm : FormGroup

  constructor (private route: ActivatedRoute, private customerService : CustomerService){
    this.customerForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(6)]),
      dateOfBirth: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email, this.emailValidator()])
    })

  }
  ngOnInit() {



    const getId = this.route.snapshot.paramMap.get('id');
    if (getId){
        this.id = getId;
        const currentCustomer = this.customerService.getById(this.id);

        this.customerForm = new FormGroup({
          name: new FormControl(currentCustomer?.name,[Validators.required, Validators.minLength(6)]),
          dateOfBirth: new FormControl(currentCustomer?.dateOfBirth,[Validators.required]),
          email: new FormControl(currentCustomer?.email,[Validators.required, Validators.email, this.emailValidator()])
        })
    }
  }

  onSubmit(customer:Customer){
    if (this.id === 'newCustomer')
      this.customerService.create(customer);
    else{
      customer.id = this.id;
      this.customerService.update(customer);
    }

  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email: string = control.value;
      if (email && email.indexOf('@ada.com') === -1) {
        return { 'invalidEmailAda': true };
      }
      return null;
    };
  }

}
