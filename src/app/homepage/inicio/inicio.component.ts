import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  bandera:boolean=false;

  @ViewChild('stickyMenu') menuElement: any;
  sticky: boolean = false;
  elementPosition: any;

  constructor() { }

  ngOnInit(): void {
  }
 ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    /* console.log(windowScroll); */
    
    if(windowScroll > 777){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }


  activar(){
    return this.bandera=true;
  }

}
