import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.scss']
})
export class FomularioComponent implements OnInit {

  formulario:FormGroup=new FormGroup({
   
    nombre:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    
  });
   

  constructor() { }

   guardar(){
    console.log(this.formulario.value);
  }
 
  ngOnInit(): void {
  }

}
