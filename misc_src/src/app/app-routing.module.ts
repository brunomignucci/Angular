import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UsuarioComponent} from "./components/usuario/usuario.component";
import {HomeComponent} from "./components/home/home.component";

import  {UsuarioNuevoComponent} from "./components/usuario/usuario-nuevo.component";
import {UsuarioEditarComponent}from "./components/usuario/usuario-editar.component";
import {UsuarioDetalleComponent} from"./components/usuario/usuario-detalle.component";
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'usuario/:id', 
    component: UsuarioComponent,
    children:[
      { path: 'nuevo', component: UsuarioNuevoComponent },
      { path: 'editar', component: UsuarioEditarComponent },
      { path: 'detalle', component: UsuarioDetalleComponent },
      {path:'**', pathMatch: 'full', redirectTo: 'nuevo'}
    ]
  },
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }