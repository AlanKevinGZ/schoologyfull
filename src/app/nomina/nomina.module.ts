import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NominaRoutingModule } from './nomina-routing.module';
import { DocentesComponent } from './docentes/docentes.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { MenuNominaComponent } from './menu-nomina/menu-nomina.component';


@NgModule({
  declarations: [
    DocentesComponent,
    AdministrativoComponent,
    MenuNominaComponent
  ],
  imports: [
    CommonModule,
     NominaRoutingModule,
  ]
})
export class NominaModule { }
