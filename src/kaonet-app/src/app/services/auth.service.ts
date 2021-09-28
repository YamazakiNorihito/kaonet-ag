import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiurl: string = 'http://localhost:49154/'

  constructor(private http: HttpClient, private router: Router) { }

  signin(email: string, passwd: string): Observable<any> {
    var postdata: { email: string, password: string } = { email: email, password: passwd };
    return this.http.post(`${this.apiurl}auth/signin`, postdata).pipe(
      map((token) => {
        console.log('AuthService');
        localStorage.setItem('test', 'AuthService')

        localStorage.setItem('token', JSON.stringify(token))

        return token;
      })
    )
  }
}
