import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  arrUser:any=[];
  erro:boolean=false;
  msjError:string='';

  usuario:string='';
  password:string='';
 

  constructor() { }

  ngOnInit(): void {
  }

  enviar(e:any){
    e.preventDefault();

    this.usuario=this.usuario.trim();
    this.password=this.password.trim();

    if (!this.usuario || !this.password) {
     
      this.msjError='Los Campos no Pueden Ir Vacios';
      this.erro=true;

      setTimeout(() => {
        this.msjError='Los Campos no Pueden Ir Vacios';
        this.erro=false;
      }, 3000);

      return;
    }
   
    
  
  }

}
