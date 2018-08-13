import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    // listen to scroll from window, then call scroll method
    window.addEventListener('scroll', this.scroll.bind(this), true);

    // On Load, call scroll method once
    this.scroll();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll.bind(this), true);
  }

  scroll() {
    const items = document.querySelectorAll('.timeline li');
    for (let i = 0; i < items.length; i++) {
      if (this.isElementInViewport(items[i])) {
        items[i].classList.add('in-view');
      } else {
        items[i].classList.remove('in-view');
      }
    }
  }

  isElementInViewport(el): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
