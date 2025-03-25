import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {BodyLayoutComponent } from './body-layout/body-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavBarComponent,
    BodyLayoutComponent,
    FooterLayoutComponent
  ],
  exports:[
    NavBarComponent,
    BodyLayoutComponent,
    FooterLayoutComponent
  ]
})
export class CoreModule { }
