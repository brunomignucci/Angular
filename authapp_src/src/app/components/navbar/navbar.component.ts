import { Component, OnInit,Inject } from '@angular/core';
// Import the AuthService type from the SDK

// Import the AuthService type from the SDK
import { AutenticacionService}from "../../services/autenticacion.service"
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AutenticacionService) 
  { 
    
  }

  ngOnInit(): void {
  }

}
