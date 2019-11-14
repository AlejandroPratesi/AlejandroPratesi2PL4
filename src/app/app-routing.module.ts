import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

// COMPONENTES
import { HomeComponent } from '../app/componentes/home/home.component';
import { RegistrarseComponent } from  '../app/componentes/registrarse/registrarse.component';
import { PaginaNoEncontradaComponent } from '../app/componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListadoComponent} from './componentes/listado/listado.component';
import { LoginGuardianService } from './servicios/login-guardian.service';

const routes: Routes = [
  { path: 'Home', component: HomeComponent ,canActivate:[LoginGuardianService] },
  { path: 'Registrarse', component: RegistrarseComponent, canActivate:[LoginGuardianService]},
  { path: '404', component: PaginaNoEncontradaComponent },
   { path: 'Listado', component: ListadoComponent ,canActivate:[LoginGuardianService]},
  { path: 'Login', component: LoginComponent },
  { path: '',   redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
