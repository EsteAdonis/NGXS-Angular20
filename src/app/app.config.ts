import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideStore } from '@ngxs/store';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TodoState } from './state/todo.state';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
		provideHttpClient(),
		provideStore([TodoState]),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
