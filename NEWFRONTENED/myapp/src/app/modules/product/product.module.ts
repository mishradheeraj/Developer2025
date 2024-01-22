import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from '../../navbar/navbar.component';





@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    
    
  ]
})
export class ProductModule { }
