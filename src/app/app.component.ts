import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '@app/core/animations/route.animations';

// Firebase App is always required and must be first
const firebase = require('firebase/app');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'Tony Stevanovich';
  logo = require('../assets/images/logo.png');

  // navigation
  navLinks = [
    { link: 'about', label: 'About' },
    { link: 'skills', label: 'Skills' },
    { link: 'resume', label: 'Resume' }
  ];
  socialLinks = [
    {
      link: 'https://www.facebook.com/stevanovich',
      label: 'Facebook',
      icon: 'fa fa-facebook-square'
    },
    {
      link: 'https://twitter.com/TonyStevanovich',
      label: 'Twitter',
      icon: 'fa fa-twitter-square'
    },
    {
      link: 'https://www.linkedin.com/in/tony-stevanovich-7030b11/',
      label: 'LinkedIn',
      icon: 'fa fa-linkedin-square'
    },
    {
      link: 'https://github.com/tstevanovich',
      label: 'Github',
      icon: 'fa fa-github-square'
    },
    { link: 'mailto:tonys@yahoo.com', label: 'Email', icon: 'fa fa-envelope' }
  ];

  constructor() {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCBhTiYSp33XlsP51GFbite8CnkJ8kUcm4',
      authDomain: 'tony-e6d73.firebaseapp.com'
    });
  }
}
