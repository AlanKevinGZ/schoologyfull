import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './acceso/login/login.component';
import { RecuperarComponent } from './acceso/recuperar/recuperar.component';
import { RegistroComponent } from './acceso/registro/registro.component';
import { InicioComponent } from './homepage/inicio/inicio.component';
import { ProductosComponent } from './galeria/productos/productos.component';
import { GaleriaModule } from './galeria/galeria.module';
import { Producto1Component } from './galeria/producto1/producto1.component';
import { PruebaComponent } from './galeria/prueba/prueba.component';




const routes: Routes = [
  {path:'',component:InicioComponent },
  {path:'login',component: LoginComponent},
  {path:'registro',component: RegistroComponent},
  {path:'recovery',component: RecuperarComponent},
  
  { path: 'nomina', loadChildren:()=>import('./nomina/nomina.module').then(m=>m.NominaModule) },



  {path:'productos', component:ProductosComponent},
  {path:'productos/:id', component:Producto1Component}, 
 
  {path:'productos', loadChildren:()=>import('./galeria/galeria.module').then(m=>m.GaleriaModule)},
  {path:'prueba',component: PruebaComponent},
  
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
