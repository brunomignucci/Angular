import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input()heroe: Heroe;
  @Input()ind: number;

  @Output()heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  verHeroe()
  {
    //console.log(idx);
    this.router.navigate(["/heroe",this.ind]);
    //this.heroeSeleccionado.emit(this.ind);
  }
}
