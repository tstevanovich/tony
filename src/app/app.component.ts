import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '@app/core/animations/route.animations';

// Firebase App is always required and must be first (disabling for local json instead)
// const firebase = require('firebase/app');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'Tony Stevanovich';

  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyCBhTiYSp33XlsP51GFbite8CnkJ8kUcm4',
    //   authDomain: 'tony-e6d73.firebaseapp.com'
    // });
  }
}
