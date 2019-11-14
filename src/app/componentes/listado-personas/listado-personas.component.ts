import { Component, OnInit , Input,Output} from '@angular/core';
import { Persona } from '../../clases/persona';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  @Input()  persona: Persona;
  @Input() indice: number;

  constructor(private ServicioUsuario: UserService) { }

  ngOnInit() {
  }

  emitirSaludo(){
    this.ServicioUsuario.saludar.emit(this.indice);
  }





}
