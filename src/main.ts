import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import localeFrCa from '@angular/common/locales/fr-CA';

registerLocaleData(localeFrCa);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
