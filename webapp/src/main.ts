import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  {
    provide: 'ENVIRONMENT',
    useValue: environment
  },
  {
      provide: 'SHOW_FRAME',
      useValue: environment.showFrame
    },
    {
    provide: 'WS_ENDPOINT',
    useValue: environment.websocketEndpoint
    }
  ]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
