import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { SearchPage } from "./search.component";


@NgModule({
  declarations: [
    SearchPage
  ],
  imports: [
    CommonModule,
    SharedModule
  ]

})

export class SearchModule { }
