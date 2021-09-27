import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-normalnav',
  templateUrl: './normalnav.component.html',
  styleUrls: ['./normalnav.component.scss']
})
export class NormalnavComponent implements OnInit, OnDestroy {

  isCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }


}
