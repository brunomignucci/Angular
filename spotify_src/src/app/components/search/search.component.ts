import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  busqueda:any[]=[];
  encontro:boolean;
  constructor(private spotify:SpotifyService) {

  }

  ngOnInit(): void {
  }

  buscar(busq:string)
  {
    this.spotify.getCountryReleases(busq)
  .subscribe((data:any) => {
    this.busqueda=data;
    this.encontro=true;
    console.log(this.busqueda);
  }, error => {
    this.encontro=false;
  });

}
    
  

}
