import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorsModule } from './interceptors';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppRecaptchaModule } from './app-recaptcha.module';


@NgModule({
  imports: [
    CommonModule,
    ServicesModule.forRoot(),
    HttpClientModule,
    InterceptorsModule,
    NgHttpLoaderModule.forRoot(),
    AppRecaptchaModule
  ],
  exports:[
    CommonModule,
    ServicesModule,
    HttpClientModule,
    InterceptorsModule,
    NgHttpLoaderModule,
    AppRecaptchaModule

  ]
})

export class SharedModule { }
