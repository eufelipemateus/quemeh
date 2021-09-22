import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { HomePage } from "./home.component";


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    SharedModule
  ]
})

export class HomeModule { }
