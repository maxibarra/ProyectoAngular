import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  persona: Persona = new Persona('maxi','maxi@gmail.com','este es un mensaje','')
  
  formularioPersona = new FormGroup({
    nombre: new FormControl('',[Validators.required,Validators.minLength(10)]),
    // email: new FormControl('',[Validators.required,Validators.email]),
    // mensaje: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.formularioPersona.get('nommbre')?.setValue(this.persona.nombre);
      // this.formularioPersona.get('email')?.setValue(this.persona.email);
      // this.formularioPersona.get('mensaje')?.setValue(this.persona.mensaje);
      this.formularioPersona.get('password')?.setValue(this.persona.password);
    },1000)
  }


  mostrarFormulario(){
    console.log(this.formularioPersona.value);
  }
}
