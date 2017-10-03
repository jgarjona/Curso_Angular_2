// Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulos de aplicacion
import {SharedModule} from './shared/shared.module';
// Componentes de modulo
import { AppComponent } from './app.component';

import { LadoComponent } from './lado/lado.component';

@NgModule({
  declarations: [
    AppComponent,
    LadoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
