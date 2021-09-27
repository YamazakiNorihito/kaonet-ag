import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    IndexComponent
  ]
})
export class IndexModule { }
