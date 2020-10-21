import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//CAMBIAR IDIOMA A LAS FECHAS
import{LOCALE_ID} from "@angular/core";
import { registerLocaleData } from '@angular/common';

// importar locales
import localePy from '@angular/common/locales/es-PY';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import localeEsAr from '@angular/common/locales/es-AR';

import {CapitalizadoPipe} from "./pipes/capitalizado.pipe";
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { VisiblePipe } from './pipes/visible.pipe'

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localePy, 'es');
registerLocaleData(localePt, 'pt');
registerLocaleData(localeEn, 'en')
registerLocaleData(localeEsAr, 'es-Ar');


@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    VisiblePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide:LOCALE_ID, useValue:'es-Ar'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
