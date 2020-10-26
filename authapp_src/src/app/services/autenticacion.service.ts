import { Component, OnInit, Injectable } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { async } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(public auth:AuthService) { }

  loguearse()
  {
    this.auth.loginWithRedirect();
  }

  estaAutenticado():boolean
  {
    return this.auth.isAuthenticated$.subscribe(res => {if(res) return true};

    
  }

  }
}
