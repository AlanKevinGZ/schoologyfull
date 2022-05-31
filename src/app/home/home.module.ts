import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarhomeComponent } from './navbarhome/navbarhome.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FooterComponent,
    NavbarhomeComponent,
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
