import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  about = '.aboutContainer';

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.initScrollTriggers();
  }

  initScrollTriggers(){
    gsap.from(this.about, {
      scrollTrigger: {trigger: this.about, start: '-150 center'},
      x:500,
      duration: 2,
    })
  }
}

//, toggleActions: "restart  none reverse pause"
