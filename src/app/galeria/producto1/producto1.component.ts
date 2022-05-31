import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../catalogo.service';

@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.component.html',
  styleUrls: ['./producto1.component.scss']
})
export class Producto1Component implements OnInit {

  objpro:any=[];

  id:number=0;

  constructor(private activeRouter:ActivatedRoute, private service:CatalogoService) {

   }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params)=>{
    /* obentemos el valor  */
   /*  console.log(params); */
    this.id=params['id'];
    console.log(this.id);
    
  })

    
    this.objpro=this.service.getId(this.id-1);
    console.log(this.objpro);
    
  }

}
