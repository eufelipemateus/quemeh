import { NgModule } from '@angular/core';

import { RecaptchaV3Module ,  RECAPTCHA_LANGUAGE, RECAPTCHA_V3_SITE_KEY, RecaptchaSettings} from 'ng-recaptcha';
import {environment} from '../environments/environment';

@NgModule({
  imports: [
    RecaptchaV3Module ,

  ],
  exports: [
    RecaptchaV3Module ,

  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.siteKey
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'pt', // use French language
    },
  ],
})
export class AppRecaptchaModule { }
