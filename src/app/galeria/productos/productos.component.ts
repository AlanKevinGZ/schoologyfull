import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoService } from '../catalogo.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  arrProducto:any=[];

  bandera:boolean=false;
  bandera2:boolean=false;
  product:string='';

  constructor(private routa:Router,private activeRouter:ActivatedRoute,private sevicePro:CatalogoService) { }

  ngOnInit(): void {
    this.arrProducto=this.sevicePro.getProductos();
    console.log(this.arrProducto);
    
  }

  onClick(valor:string){
    this.routa.navigate(['productos'+'/'+valor]);    
  }

  busqueda(producto:string){
   
    let res=this.sevicePro.buscarProducto(producto);

    if (res.length<=0) {
      this.arrProducto=this.sevicePro.getProductos();
    }else{
      this.arrProducto=res;
    }
    
  }

  

  menu(){
    this.bandera=!this.bandera
  }
}
