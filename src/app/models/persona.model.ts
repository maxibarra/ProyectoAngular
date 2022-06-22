export class Persona{
  nombre: string;
  email: string;
  mensaje: string;
  password:string;

  constructor(nombre: string, email: string, mensaje: string, password: string){
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.mensaje =mensaje;
  }

}