"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ClaseSita = /** @class */ (function () {
    function ClaseSita(n) {
        this.nombre = n;
        this.equipo = "guachin";
        this.nombreReal = "guachin";
        this.puedePelear = true;
        this.numeraco = 30;
    }
    ClaseSita.prototype.modificar = function (n) {
        this.numeraco += n;
        console.log(this.numeraco);
    };
    return ClaseSita;
}());
function saludar(nombre) {
    console.log("Hola" + nombre.toUpperCase());
}
function poder(xmen) {
    console.log("Poder del :" + xmen.nombre);
}
var wolverine = {
    nombre: "Logan",
    pepe: "holis"
};
poder(wolverine);
//saludar(wolverine.nombre);
var mensaje = "hola";
var texto = "Hola " + mensaje;
var OPCIONES = "todas";
console.log(texto);
var num = 123;
var hoy = new Date();
if (true) {
    var mensaje_1 = "chau";
    var OPCIONES_1 = "todas";
}
console.log(mensaje);
var obj = new ClaseSita("HOLA");
console.log(obj);
obj.modificar(30);
function consola(constructor) {
    console.log(constructor);
}
var Villano123 = /** @class */ (function () {
    function Villano123(nombre) {
        this.pepe = nombre;
    }
    Villano123 = __decorate([
        consola
    ], Villano123);
    return Villano123;
}());
