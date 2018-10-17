import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
   
    constructor(private tokenService: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        
            if(this.tokenService.hasToken()){
                const token = this.tokenService.getToken();
                req = req.clone({
                    setHeaders:{
                        'Authorization': token
                    }
                });
            }

           return next.handle(req);
    }

}