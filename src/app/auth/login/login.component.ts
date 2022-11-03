import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../_services/auth/auth.service';
import { AuthStorageService } from '../../_helpers/auth-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup | any ;
  users: any | null;
  errors: any | null;
  message: any | null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private authStorageService: AuthStorageService,
    private router: Router

  ) {}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['than@gmail.com', [Validators.email, Validators.required]],
      password: ['12345678', [Validators.required, Validators.minLength(5)]],
    });

  }

  /* Login Form Submission */
  submit() {

    if (this.loginForm.valid) {
      this.authService.isLogin(this.loginForm.value).subscribe(
        (result) => {
          this.authStorageService.storeAuthUser(result);
          // console.log('submit', this.loginForm.value);
          // console.log('email', this.loginForm.controls['email'].value);
          // console.log('email', this.loginForm.controls.email.value);
        },
        (error) => {
          this.errors = error.error;
          this.message = "Invalid Login Credentials";
          // console.log('error', error)
        },
        () =>
        {
          this.loginForm.reset();
          // console.log('token setted', sessionStorage.getItem('auth_token'));
          this.router.navigate(['/user']);
        }
      );

    } else {
      alert('Invalid Form Data');
    }

  }

  get f() {
    return this.loginForm.controls;
  }

}

