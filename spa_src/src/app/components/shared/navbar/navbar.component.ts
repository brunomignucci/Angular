import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from "../../../servicios/heroes.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
  
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService,
    private router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string)
  {
    console.log(termino);
    //let h:Heroe[]=this._heroesService.buscarHeroes(termino);
    //console.log(h);
    this.router.navigate(["/busqueda",termino]);
  }

}
