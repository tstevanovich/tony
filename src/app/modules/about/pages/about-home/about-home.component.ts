import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss']
})
export class AboutHomeComponent implements OnInit {
  ajBday = new Date('12/27/1999');
  tyBday = new Date('12/30/2001');
  ajAge = this.getAge(this.ajBday);
  tyAge = this.getAge(this.tyBday);

  constructor() {}
  ngOnInit(): void {}
  getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
