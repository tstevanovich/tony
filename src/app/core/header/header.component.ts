import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
