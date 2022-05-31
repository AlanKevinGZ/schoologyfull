import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Producto1Component } from './producto1/producto1.component';



const routes: Routes = [
  { path:'', children:[
    {path:'producto1', component:Producto1Component},
    

  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriaRoutingModule { }
