import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    // listen to scroll from window, then call scroll method
    window.addEventListener('scroll', this.scroll.bind(this), true);

    // On Load, call scroll method once
    this.scroll();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll.bind(this), true);
  }

  scroll() {
    const items: NodeListOf<Element> = document.querySelectorAll(
      '.timeline li'
    );
    items.forEach((item) => {
      if (this.isElementInViewport(item)) {
        item.classList.add('in-view');
      } else {
        item.classList.remove('in-view');
      }
    });
  }

  isElementInViewport(el: Element): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
