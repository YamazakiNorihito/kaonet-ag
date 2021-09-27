import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NormalnavComponent } from './normalnav/normalnav.component'


@NgModule({
  declarations: [NormalnavComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    NormalnavComponent
  ]
})
export class HeaderModule { }
