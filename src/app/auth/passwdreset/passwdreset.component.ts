import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-passwdreset',
  templateUrl: './passwdreset.component.html',
  styleUrls: ['./passwdreset.component.scss']
})
export class PasswdresetComponent implements OnInit, OnDestroy {

  emailText: string = '';
  isSend: boolean = false;
  focus1: boolean = false;
  valid: boolean = false;

  email: string = '';
  passwd: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }

  reset(form: NgForm): void {
    this.valid = false;
    let { emailText } = form.value;
    this.authService.pwdreset(emailText).subscribe(
      result => {
        this.isSend = true;
      },
      error => {
        this.valid = true;
        this.isSend = false;
        console.log(error)
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    )
  }
}
