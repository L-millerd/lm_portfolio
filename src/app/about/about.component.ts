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

  aboutSection = '.aboutSection';

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.initScrollTriggers();
  }

  initScrollTriggers(){
    gsap.from(this.aboutSection, {
      scrollTrigger: {trigger: this.aboutSection, start: 'top center'},
      x:1000,
      duration: 2,
    })
  }
}

//, toggleActions: "restart  none reverse pause"
