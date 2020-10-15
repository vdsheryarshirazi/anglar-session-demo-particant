import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  registration = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    lastName: new FormControl(),
    age: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

  viewState(){
    // console.log('this.regis', this.registration)
    this.registration.setValue({firstName :'Test TEST', lastName: 'Test' , age: 3})

    // this.registration.patchValue({firstName: 'ABC DEF'})
  }

}
