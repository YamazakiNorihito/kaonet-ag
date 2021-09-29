import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import * as moment from 'moment';
import { environment } from '../../environments/environment'
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelpService = new JwtHelperService();

class AuthLink {
  idToken: String = ''
  refreshToken: String = ''
  expiresIn: number = 0
}

class User {
  name: String = ''
  email: String = ''
  exp: number = 0
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authLink: AuthLink
  user: User

  private readonly localStorageKey: string = 'kaonet-auth'

  private apiurl: string = environment.apiUrl

  constructor(private http: HttpClient, private router: Router) {
    let authtoken = localStorage.getItem(this.localStorageKey);
    if (!authtoken) {
      this.authLink = new AuthLink();
      this.user = new User();
    } else {
      this.authLink = JSON.parse(authtoken!)
      this.user = jwtHelpService.decodeToken(this.authLink.idToken as string)
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
        localStorage.setItem(this.localStorageKey, JSON.stringify(res.data))
        return response;
      })
    )
  }

  /*
    Token valid
  */
  isAuthenticated(): boolean {
    if (!this.authLink) {
      return false;
    }
    return moment().isBefore(moment.unix(this.user.exp))
  }

  signout(): void {
    localStorage.removeItem(this.localStorageKey);
    this.authLink = new AuthLink();
  }
}
