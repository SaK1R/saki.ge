import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // or wherever you keep routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),

  ],
});