import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';

export const myHttpInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const token = localStorage.getItem('token');

  if (token) {
    req = req.clone({
      setHeaders: { token }
    });
  }

  return next(req);
};
