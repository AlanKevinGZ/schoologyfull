import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AccesoModule } from './acceso/acceso.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaModule } from './galeria/galeria.module';
import { NominaModule } from './nomina/nomina.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AccesoModule,
    NominaModule,
    GaleriaModule,
    RouterModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
