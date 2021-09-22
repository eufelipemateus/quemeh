import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainService, WindowRefService } from '.';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicesModule {

  static forRoot(){
    return {
      ngModule: ServicesModule,
      providers: [
        DomainService,
        WindowRefService
      ]
    };
  }
}
