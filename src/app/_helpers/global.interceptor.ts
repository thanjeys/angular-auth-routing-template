import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthStorageService } from './auth-storage.service';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  apiURL = "http://127.0.0.1:8000/api/";

  constructor(private authStorageService: AuthStorageService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const accessToken = sessionStorage.getItem('auth_token');
        const accessToken = this.authStorageService.getAuthToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + accessToken
            },
            url: this.apiURL + req.url
        });
        return next.handle(req);
  }
}
