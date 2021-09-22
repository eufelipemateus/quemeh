import { NgModule } from '@angular/core';
import { HomeModule} from "./home/home.module";
import { SearchModule } from './search/search.module';

@NgModule({
  imports: [
    HomeModule,
    SearchModule
  ],
  exports:[
    HomeModule,
    SearchModule
  ]
})

export class PagesModule { }
