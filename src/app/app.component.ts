import { Component, OnInit } from '@angular/core';

// Firebase App is always required and must be first
const firebase = require('firebase/app');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tony Stevanovich';
  logo = require('../assets/images/logo.png');

  // navigation
  navLinks = [
    { link: 'about', label: 'About' },
    { link: 'skills', label: 'Skills' },
    { link: 'resume', label: 'Resume' },
    { link: 'contact', label: 'Contact' }
  ];

  constructor() {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCBhTiYSp33XlsP51GFbite8CnkJ8kUcm4',
      authDomain: 'tony-e6d73.firebaseapp.com'
    });
  }
}
