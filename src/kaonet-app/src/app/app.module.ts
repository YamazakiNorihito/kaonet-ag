import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { IndexModule } from './index/index.module'
import { SharedModule } from './shared/shared.module'
import { CommonModule } from '@angular/common';
import { NormalnavComponent } from './header/normalnav/normalnav.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    IndexModule,
    HeaderModule,
    FooterModule,
    //SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
