import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Heroe, HeroesService} from "../../servicios/heroes.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  heroes:Heroe[]=[];
  term:string;
  cantidad:number;

  constructor(private _heroesService:HeroesService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { 

          
      
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params["id"])
      this.heroes =this._heroesService.buscarHeroes(params["term"]);
      this.term=params["term"];
      this.cantidad= this.heroes.length;
      console.log(this.cantidad);
      //console.log(this.heroe)
    });
  }
  verHeroe(idx:number)
  {
    //console.log(idx);
    this.router.navigate(["/heroe",idx]);
  }

}
