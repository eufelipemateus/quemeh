import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { PrebootModule } from 'preboot';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'appServe' }),
    PrebootModule.withConfig({ appRoot: 'app-root', disableOverlay: false, replay: false}),
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
