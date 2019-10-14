import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Form } from '@angular/forms';

import { User } from './../User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url;

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  submitLogin = (user): Observable<any> => {
    return this.http.post(this.url + '/login', user, this.httpHeaders).pipe(
      catchError( (err) => {
        return err.message;
      })
    )
  }

  checkUserAvailability = (username): Observable<any> => {
    return this.http.get(this.url + '/check/username?v='+username);
  }

  checkEmailAvailability = (email): Observable<any> => {
    return this.http.get(this.url + '/check/email?v='+email);
  }

  submitRegister = (user: User): Observable<User> => {
    return this.http.post<User>(this.url + '/register', user, this.httpHeaders).pipe(
    )
  }

}


