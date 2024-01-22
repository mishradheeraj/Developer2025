import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ForgetComponent } from './forget/forget.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CreateaccountComponent,
    ForgetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class AuthModule { }
