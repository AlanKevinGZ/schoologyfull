import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { Producto1Component } from './producto1/producto1.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FomularioComponent } from './fomulario/fomulario.component';
import { RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';


@NgModule({
  declarations: [
    ProductosComponent,
    Producto1Component,
    FomularioComponent,
    PruebaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GaleriaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GaleriaModule { }
