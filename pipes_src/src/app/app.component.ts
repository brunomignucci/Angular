import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre:string ="Bruno";
  nombre2:string = "Bruno RaniErO MiGnUcCi"
  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];
  
  pi:number = Math.PI;

  a:number= 0.234;

  salario:number= 1234.5;

  heroe = 
  {
    nombre: "Bruno",
    clave:"Fisura",
    edad: 500,
    direccion:
    {
      calle:"Florencio Sanchez",
      numero:"269"
    }
  };

  valorDePromesa = new Promise((resolve,reject)=>
  {
    setTimeout(()=>resolve("Llegó la data"),3500);
  });
  

  fecha = new Date();

  url = "https://www.youtube.com/embed/";
  video = "7VbTC5I-7Rk";

  contrasena:boolean=true;
}
