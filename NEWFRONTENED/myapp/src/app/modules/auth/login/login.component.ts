import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  submitted: boolean = false;
  constructor() { }

  mylogin = new FormGroup({
    user_email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+')]),
    user_pass: new FormControl('',[Validators.required]),
    checkbox:new FormControl ([false, Validators.requiredTrue])
  });

  //this is the error returne fun

  get f(): any {
    return this.mylogin.controls;
  }

  // this is the submit action myfrom
  OnSubmit() {
    this.submitted = true;
    if (this.mylogin.invalid) {
      alert('Something went wrong')
    }
    else {
      console.log(this.mylogin.value)
        this.mylogin.reset();
        this.submitted = false;
        
    }
  }

}
