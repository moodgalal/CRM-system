import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

import * as $ from 'jquery'; window["$"] = $; window["jQuery"] = $;

if (environment.production)
{
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


