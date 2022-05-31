import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RecuperarComponent,
    RegistroComponent,
  ],
  exports:[
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    FormsModule,
  ],
})
export class AccesoModule { }
