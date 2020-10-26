import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

// Import the module from the SDK
import { AuthModule  } from '@auth0/auth0-angular';
import { AuthbuttonComponent } from './components/authbutton/authbutton.component';


import {AuthGuardService} from "./services/auth-guard.service";
import {AutenticacionService} from "./services/autenticacion.service"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
    AuthbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'brunomignucci.us.auth0.com',
      clientId: '23umGD37mtHbRnGNiFHGiCdlhNtQ0Vwp'
    }),
  ],
  providers: [AuthGuardService,AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
