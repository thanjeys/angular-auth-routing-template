import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  constructor() { }

  storeAuthUser(data: any) {
    console.log('auth data', data)
    sessionStorage.setItem('auth_token', data.token);
    sessionStorage.setItem('auth_name', data.name);
    sessionStorage.setItem('auth_email', data.email);
  }

  getAuthToken() {
    return sessionStorage.getItem('auth_token');
  }

  getAuthUser() {
    return { 
      "name": sessionStorage.getItem('auth_name'), 
      "email": sessionStorage.getItem('auth_email')
    }
  }

  isLoggedIn() {
    return this.getAuthToken() ? true : false;
  }

  removeAuth() {
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_name');
    sessionStorage.removeItem('auth_email');
  }
}
