import { Injectable , EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Persona } from '../clases/persona';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listadoPaises;
  personas: Persona[] = [];

  
  saludar = new EventEmitter<number>();

  constructor(private http: HttpClient,
              private dataService: DataService) { }
    
 getPaises(){
  this.listadoPaises = this.http.get('https://restcountries.eu/rest/v2/all')
  console.log(this.listadoPaises)
  return this.listadoPaises;
  }
  
   getUser(){
 
   }
   
  setToken(token){
    localStorage.setItem("token",token);
    }

  onAgregar(persona:Persona){
   // this.loginServicio.enviarMensajeConsola("Inyectando.." + persona.apellido + ', ' + persona.nombre)
   if (this.personas ==null) {
     this.personas = [];
   }
   this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas)
  }

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  obtenerPersonas(){
    // regresa un el resultado de cargar personas del servico dataservice
    // Regresa un observable 
    return this.dataService.CargarPersonas();
  }

  modificarPersona(index:number,persona:Persona){
    this.dataService.modificarPersona(index,persona);
  }

  eliminarPersona(index:number){
    this.personas.splice(index,1);
    this.dataService.eliminarPersona(index);
    // se vuelve a guardar el array en la base
    this.modificarPersonas();
  }
  
  modificarPersonas(){
    if (this.personas != null) {
      this.dataService.guardarPersonas(this.personas);
    }
  }
  
}
