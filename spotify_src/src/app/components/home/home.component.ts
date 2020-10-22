import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
 /*
  datos:any[]=[];

  constructor(private http: HttpClient) { 

    console.log("Constructor Home");
    this.http.get("https://restcountries.eu/rest/v2/lang/es")
    .subscribe( (paises:any) => {
      console.log(paises)
      this.datos=paises;
    });
  }
*/

datos:any[]=[];

constructor(private spotify:SpotifyService)
{
  this.spotify.getNewReleases()
  .subscribe((data:any) => {
    this.datos=data;
    console.log(this.datos);
  })
  
}
  

  ngOnInit(): void 
  {
    //this.datos=this.spotify.getNewReleases();
  }

}
