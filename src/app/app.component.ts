import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {}
}
