
interface NombreInterfaz
{
    nombre:string,
    pepe:string
}

class ClaseSita
{
    nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear:boolean;
    numeraco:number;

    constructor(n:string)
    {
        this.nombre=n;
        this.equipo="guachin";
        this.nombreReal="guachin";
        this.puedePelear=true;
        this.numeraco=30;
    
    }
    
    modificar(n:number)
    {  
        this.numeraco+=n;
        console.log(this.numeraco);

    }

    
}


function saludar(nombre:string)
{
    console.log("Hola"+nombre.toUpperCase())

}

function poder(xmen :NombreInterfaz)
{
    console.log("Poder del :" +xmen.nombre);
}

let wolverine:NombreInterfaz = 
{
    nombre : "Logan",
    pepe: "holis"
};

poder(wolverine);
//saludar(wolverine.nombre);

let mensaje:string= "hola";
let texto = `Hola ${mensaje}`;
const OPCIONES = "todas";
console.log(texto);
let num:number= 123;

let hoy:Date= new Date();


if(true)
{
    let mensaje= "chau";
    const OPCIONES = "todas";

}


console.log(mensaje);

let obj= new ClaseSita("HOLA");

console.log(obj);
obj.modificar(30);

function consola(constructor:Function)
{
    console.log(constructor);
}
@consola
class Villano123
{
    public pepe:string;

    constructor(nombre:string)
    {
        this.pepe=nombre;
    }
}