import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiHttpInterceptorInterceptor } from './api-http-interceptor.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptorInterceptor,
      multi: true
    }
  ]
})
export class InterceptorsModule { }
