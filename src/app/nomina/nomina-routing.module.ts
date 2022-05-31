import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocentesComponent } from './docentes/docentes.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { MenuNominaComponent } from './menu-nomina/menu-nomina.component';

const routes: Routes = [
  { path:'', component:MenuNominaComponent },
  { path:'docentes', component:DocentesComponent },
  { path:'admin', component:AdministrativoComponent },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NominaRoutingModule { }
