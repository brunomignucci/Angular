import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  modo:string="alert-danger";
  b1:boolean=true;

  propiedades=
  {
    danger: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
