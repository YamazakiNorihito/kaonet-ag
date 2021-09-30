import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  isCollapsed: boolean = false;

  focus1: boolean = false;
  focus2: boolean = false;

  valid: boolean = false;


  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private authService: AuthService, private router: Router) {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  ngOnInit(): void {
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }

  signin(form: NgForm): void {
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

}
