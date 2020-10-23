import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tamano + 'px','color':color}">
      Esta es una etiqueta.
    </p>
    <button class="btn btn-primary" (click)="tamano= tamano+5">
    +5
    </button>

    <button class="btn btn-primary" (click)="tamano= tamano-5">
    -5
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano:number =35;
  color:string= "red";

  constructor() { }

  ngOnInit(): void {
  }

}
