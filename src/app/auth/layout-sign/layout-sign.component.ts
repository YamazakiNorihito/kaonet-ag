import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-layout-sign',
  templateUrl: './layout-sign.component.html',
  styleUrls: ['./layout-sign.component.scss']
})
export class LayoutSignComponent implements OnInit, OnDestroy {

  sign_title: String = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }

  addItem(newItem: any) {
    console.log('yamazaki')
    this.sign_title = newItem;
  }
}
