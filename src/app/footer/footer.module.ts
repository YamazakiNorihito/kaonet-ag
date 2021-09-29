import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NomalfooterComponent } from './nomalfooter/nomalfooter.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NomalfooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NomalfooterComponent
  ]
})
export class FooterModule { }
