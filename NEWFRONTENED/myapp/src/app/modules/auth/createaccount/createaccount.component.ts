import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {
  submitted:boolean=false;
  maxInputLength:number=25;
  phone_lenght:number=10;
constructor(){}


myform=new FormGroup({
    Username:new FormControl('',[Validators.required,Validators.maxLength(25),Validators.minLength(2)]),
    user_email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+'),]),
    phone_no:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    user_pass:new FormControl('',[Validators.required,Validators.maxLength(25),Validators.minLength(8)]),
    user_repass:new FormControl('',[Validators.required,Validators.maxLength(25),Validators.minLength(8)]),
    
})

//pass match to


get f(): any {
  return this.myform.controls;
}

  ngOnInit(): void {
    
  }
  onsubmit(){
    this.submitted=true;
    if(this.myform.invalid){
        alert("something went worng")
  }
  else{
    

    alert('data isn save')
  }
  }
//passmatch fun
passMatch(){
  this.myform.controls.user_pass.value === this.myform.controls.user_repass.value
  alert('this pass and repass not match')
  return
}

}
