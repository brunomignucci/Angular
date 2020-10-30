import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, FormArray, Form} from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [
  ]
})
export class DataComponent implements OnInit {

  forma: FormGroup;

 usuario =
 {
   nombre: "Bruno",
   apellido: "Mignucci",
   mail: "brunomignucci@gmail.com",
   pasatiempos: ["correr","dormir","comer"]
 };

  constructor() { 

    this.forma= new FormGroup({
      "nombre": new FormControl(this.usuario.nombre,Validators.required),
      "apellido": new FormControl(this.usuario.apellido,[Validators.required,this.noMignucci]),
      "mail": new FormControl(this.usuario.mail,[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      "pasatiempos": new FormArray([
         new FormControl("correr", Validators.required),
         new FormControl("comer",Validators.required),
         new FormControl("dormir",Validators.required)
      ]),
      "username": new FormControl("",Validators.required,this.existeUsuario),
      "password1": new FormControl("",Validators.required),
      "password2": new FormControl(""),
     
    })
    console.log(this.forma);
    this.forma.controls["password2"].setValidators([Validators.required,this.noIgual.bind(this.forma)]);
    //this.forma.setValue(this.usuario);

    /*
    this.forma.valueChanges
      .subscribe(data =>
        {
          console.log(data)
        });
        */
       /*
       this.forma.controls["username"].valueChanges
        .subscribe( data=>
          {
            console.log(data);
          });

          this.forma.controls["username"].statusChanges
          .subscribe( data=>
            {
              console.log(data);
            });
            */
    
  }

  ngOnInit(): void {
  }

  guardarCambios()
  {
    console.log(this.forma.value);
    console.log(this.forma); 


    //this.forma.reset({nombre:"",apellido:"",correo:""});
    //this.forma.reset(this.usuario);
    /*
    this.forma= new FormGroup({
      "nombre": new FormControl(this.usuario.nombre,Validators.required),
      "apellido": new FormControl(this.usuario.apellido,Validators.required),
      "mail": new FormControl(this.usuario.mail,[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      "pasatiempos": new FormArray([
         new FormControl("correr", Validators.required),
         new FormControl("comer",Validators.required),
         new FormControl("dormir",Validators.required)
      ])
    
    })
    */

  }

  agregarPasatiempo()
  {
    (<FormArray>this.forma.controls["pasatiempos"]).push(
      new FormControl("",Validators.required)
    );

  }

  noMignucci(control:FormControl) :{[s:string]:boolean}
  {
    if(control.value==="Mignucci")
    return{
      nomignucci:true
    };

    return null;
  }
  noIgual(control:FormControl) :{[s:string]:boolean}
  {
    
    let forma:any=this;
    
    if(control.value !==forma.controls["password1"].value)
    return{
      noigual:true
    };

    return null;
    
  }

  existeUsuario (control : FormControl): Promise<any>|Observable<any>
  {
    let promesa= new Promise(
      (resolve,reject)=>{

        setTimeout(()=>{
          if(control.value ==="strider")
          {
            resolve({existe:true});
          }
          else
          {
            resolve(null);
          }
          
        },3000)
      }
    )
    return promesa;
  }

  get formData() { 
    return this.forma.get('pasatiempos'); 
  }
}
