import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listadoPaises: any;

  constructor(private userServicio: UserService) { }

  ngOnInit() {

   
  }

  getListado(): void {
    this.userServicio.getPaises()
      .subscribe((data: any) => {
        this.listadoPaises = data;
        console.log(data);
      }, data => {
        console.log(data);
      }
      )
  }

 /* 
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  } */
}
