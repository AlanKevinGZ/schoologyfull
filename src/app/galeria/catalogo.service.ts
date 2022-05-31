import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  lista:any=[
    {id:1,nombre:'manzana', precio:100, imagen:'../../assets/img/curso2.jpg'},
    {id:2,nombre:'guitarra', precio:600, imagen:'../../assets/img/curso3.jpg'},
    {id:3,nombre:'guitarra', precio:600, imagen:'../../assets/img/curso3.jpg'},
    {id:4,nombre:'guitarra', precio:600, imagen:'../../assets/img/curso3.jpg'},
    {id:5,nombre:'guitarra', precio:1000, imagen:'../../assets/img/curso3.jpg'},
    {id:6,nombre:'reparar pc', precio:7000, imagen:'../../assets/img/Teachers.png'},
  ];

  constructor() { }

  getProductos(){
  
    return this.lista;
  }

  getId(id:string | number){
    return this.lista[id];
  }

  buscarProducto(termino:string){
    
    let arr:any=[];
    
   this.lista.forEach( (e:any) => {
     console.log(e.nombre.indexOf(termino));
     if (e.nombre.indexOf(termino)>=0) {
      arr.push(e);
     }
     
   });
   
   return arr;
    
  }

  
/* agregar  */
  addProduct(obj:any){
    this.lista.push(obj);
  }


}
