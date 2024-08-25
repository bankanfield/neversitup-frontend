import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbTokenService } from '@nebular/auth';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private excludedUrls: string[] = ['/api/auth/login', '/api/auth/register'];

  constructor(private tokenService: NbTokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.excludedUrls.includes(request.url)) {
      return next.handle(request);
    }

    return this.tokenService.get().pipe(
      switchMap((nbToken) => {
        const authReq = request.clone({
          setHeaders: {
            Authorization: `Bearer ${nbToken.getValue()}`,
          },
        });
        return next.handle(authReq);
      })
    );
  }
}
