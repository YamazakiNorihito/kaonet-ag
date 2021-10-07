import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  isTermClick: boolean = false;
  isCollapsed: boolean = false;

  focus: boolean = false;
  focus1: boolean = false;
  focus2: boolean = false;
  valid: boolean = false;
  valid_msg_email: String = '';
  valid_msg_passwd: String = '';

  email: string = '';
  passwd: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }

  signup(form: NgForm): void {
    console.log('aaaaa')
    this.valid = false;
    let { email, passwd } = form.value;
    this.authService.signin(email, passwd).subscribe(
      result => {
        this.router.navigateByUrl('/');
      },
      error => {
        this.valid = true;
        console.log(error)
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    )
  }

  valid_clear(): void {
    this.valid_msg_email = '';
    this.valid_msg_passwd = '';
  }

  onClickTerm(): void {
    this.isTermClick = !this.isTermClick;
  }
}
