import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LayoutSignComponent } from './layout-sign/layout-sign.component';
import { PasswdresetComponent } from './passwdreset/passwdreset.component';


@NgModule({
  declarations: [SigninComponent, SignupComponent, LayoutSignComponent, PasswdresetComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
