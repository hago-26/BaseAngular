import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {

  const token = "";


  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${environment.jwt}`
    }
  });

  return next(authReq);
};
