import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';//importacion de idioma español
import localFr from '@angular/common/locales/fr';//importacion de idioma francés
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';

//Registramos idioma español
registerLocaleData(localEs);
//Registramos idioma francés
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
