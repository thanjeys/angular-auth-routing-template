import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  isLogin(loginForm: any): Observable<any> {
    return this.httpClient.post('login', loginForm);
  }

  getAllusers(): Observable<any> {
    return this.httpClient.get('allusers');
  }

  getuser(): Observable<any> {
    return this.httpClient.get('detail');
  }

}
