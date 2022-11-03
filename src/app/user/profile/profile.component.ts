import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { AuthStorageService } from './../../_helpers/auth-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  auth_token : any;
  userDetail: any;
  loading = false;

  constructor(
    private authService: AuthService,
    private authStorageService: AuthStorageService
  ) { 

  }

  ngOnInit(): void {
    this.auth_token = this.authStorageService.getAuthToken();

    console.log(this.authStorageService.getAuthUser());
    console.log(this.authStorageService.isLoggedIn());
    console.log('ath email', sessionStorage.getItem('email'));
    // get User Details
    this.loading = true;
    this.authService.getuser().subscribe(
      (result) => {
        this.userDetail = result;
        this.loading = false;
      },
      (error) => {
        // console.log(error)
      }
    )
  }


}
