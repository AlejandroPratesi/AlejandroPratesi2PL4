import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { ListadoComponent } from './componentes/listado/listado.component';

// SERVICIOS
import {UserService} from './servicios/user.service';
import { ListadoPersonasComponent } from './componentes/listado-personas/listado-personas.component';
import { DataService } from './servicios/data.service';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginService } from './servicios/login.service';
import { LoginGuardianService } from './servicios/login-guardian.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNoEncontradaComponent,
    RegistrarseComponent,
    LoginComponent,
    ListadoComponent,
    ListadoPersonasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService,DataService,LoginService,LoginGuardianService],
  bootstrap: [AppComponent]
})
export class AppModule { }
