import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { APP_ROUTES } from './app.routing';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './shared/app-errors-handler';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    APP_ROUTES
  ],
  providers: [
    {provide:ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
