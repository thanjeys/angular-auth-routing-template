import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStorageService } from 'src/app/_helpers/auth-storage.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authStorageService: AuthStorageService
    ) { }

  ngOnInit(): void {
    // sessionStorage.removeItem('auth_token');
    this.authStorageService.removeAuth();
    // this.router.navigateByUrl('/auth/login');
  }

}
