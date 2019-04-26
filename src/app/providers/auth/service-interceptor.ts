import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/do';
import 'rxjs/operator/catch';
import 'rxjs/observable/throw';
@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
  constructor(private _router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // add a custom header
    // const customReq = req.clone({
    //   headers: req.headers.set('Token', localStorage.getItem('token'))
    // });
    return next.handle(req)
      .do((res: HttpEvent<any>) => {
        if (res instanceof HttpResponse) {
          console.log(`Getting Response .........`);
        }
      })
      .catch((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 401) {
            localStorage.clear();
            this._router.navigate(['/login']);
          }
        }
        return Observable.throw(err);
      })
  }
}
