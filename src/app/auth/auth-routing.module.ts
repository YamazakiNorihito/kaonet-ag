import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutSignComponent } from './layout-sign/layout-sign.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', component: LayoutSignComponent,
    children: [
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
