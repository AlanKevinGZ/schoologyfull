import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatalogoService } from '../catalogo.service';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  formulario:FormGroup=new FormGroup({
   
    id:new FormControl('',[
      Validators.required,
    ]),

    nombre:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    precio:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    imagen:new FormControl('',[this.img]),

    password:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    
  });

  constructor(private sevicePro:CatalogoService) { }

  ngOnInit(): void {
    
    
  }

  guardar(){
    console.log(this.formulario.value);
    this.sevicePro.addProduct(this.formulario.value);
    console.log(this.sevicePro.getProductos());
    
  }

  img(formControl:any){
    
  let valor=formControl.value;

  if (valor) {
  
    valor= valor.substring(valor.lastIndexOf('\\')+1);
  
    formControl.value='../../assets/img/'+valor;
  
    return formControl.value;
   
  }else{
    return null;
  }
  
  
  }
 

}
