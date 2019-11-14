import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AP';

  constructor(){

  }

  ngOnInit():void{
    firebase.initializeApp({
      apiKey: "AIzaSyCFZ6o8p_GJDL8dLtoYmahNM0gR3uJDssE",
      authDomain: "parcial-e1a1f.firebaseapp.com",
    })
  }  
}
