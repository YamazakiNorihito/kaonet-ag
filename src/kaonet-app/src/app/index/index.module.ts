import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    IndexComponent
  ]
})
export class IndexModule { }
