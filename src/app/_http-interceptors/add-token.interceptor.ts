import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService){
    console.log(this.authService.getToken())
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authService.isAuthenticated()) {
      const request = req.clone({ 
        headers: req.headers.set('Authorization', `Bearer ${this.authService.getToken()}`),
      });
      return next.handle(request);
    } else {
      return next.handle(req);
    }
  }
}