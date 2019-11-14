import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user.service';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServicio: UserService,private loginServicio: LoginService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
  
    const email = form.value.mail;
    const password = form.value.password;
    console.log("Logueando " + email + " " + password);
    this.loginServicio.login(email,password);
  }


}
