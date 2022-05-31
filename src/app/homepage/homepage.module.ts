import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from '../acceso/registro/registro.component';




@NgModule({
  declarations: [
    InicioComponent,
    RegistroComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
   
  ]
})
export class HomepageModule { }
