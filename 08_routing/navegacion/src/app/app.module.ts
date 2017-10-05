// Modulos de angular
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Mmodulos de la aplicacion
import { AutoresModule } from './autores/autores.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { EnlacesModule } from './enlaces/enlaces.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routing';
// Componentes de la aplicacion
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    SharedModule,
    HomeModule,
    AboutModule,
    EnlacesModule,
    CatalogoModule,
    AutoresModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
