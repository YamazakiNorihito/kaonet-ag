import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import * as moment from 'moment';


class AuthLink {
  name: String = ''
  user_id: String = ''
  exp: number = 0
  email: String = ''
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authLink: AuthLink

  private readonly localStorageKey: string = 'kaonet-auth'

  private apiurl: string = 'http://localhost:49153/'

  constructor(private http: HttpClient, private router: Router) {
    let authtoken = localStorage.getItem(this.localStorageKey);
    if (!authtoken) {
      this.authLink = JSON.parse(authtoken!)
    } else {
      this.authLink = new AuthLink();
    }
  }

  /*
    signin
  */
  signin(email: string, passwd: string): Observable<any> {
    var postdata: { email: string, password: string } = { email: email, password: passwd };
    return this.http.post(`${this.apiurl}auth/signin`, postdata).pipe(
      map(response => JSON.stringify(response)),
      map((response) => {
        // 一度サインアウト状態にする
        this.signout();
        let res = JSON.parse(response)
        console.log(res)
        console.log(res.data)
        localStorage.setItem(this.localStorageKey, JSON.stringify(res.data))
        return response;
      })
    )
  }

  /*
    Token valid
  */
  isAuthenticated(): boolean {
    console.log('isAuthenticated')
    if (!this.authLink) {
      return false;
    }

    return moment().isBefore(moment.unix(this.authLink.exp))
  }

  signout(): void {
    localStorage.removeItem(this.localStorageKey);
    this.authLink = new AuthLink();
  }
}
