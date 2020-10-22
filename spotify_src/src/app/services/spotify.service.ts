import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map}from "rxjs/operators"
import { throwError}from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient)
  { 
  console.log("Spotify Service Listo"); 
  }

  getNewReleases()
  {
    /*
    const headers= new HttpHeaders({
      "Authorization":"token"
    });
    this.http.get("https://restcountries.eu/rest/v2/lang/es",{headers})
    .subscribe(data => {
      console.log(data)
    })
    */
    return this.http.get("https://restcountries.eu/rest/v2/lang/es")
    .pipe( map (data => {
      return data;
    }))
    
  }
  getCountryReleases(dat:string)
  {
    return this.http.get("https://restcountries.eu/rest/v2/name/"+dat)
    .pipe( map (data => {
      return data;
    })

    );
  }
  
 
  
}
