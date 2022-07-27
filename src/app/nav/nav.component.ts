import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private vs: ViewportScroller) { }

  scrollProjects(){
    this.vs.scrollToAnchor('app-projects');
  }

  scrollAbout(){
    this.vs.scrollToAnchor('app-about')
  }
  ngOnInit(): void {
    gsap.from(".nav-item", {
      duration: 0.75,
      y:-100,
      rotation: 45,
      ease: "power2.inOut",
      stagger: 0.2
      }).delay(0.75);

      gsap.from(".drop", {
        duration: 0.75,
        y: -100,
        rotation: 45,
        ease: "power2.inOut",
        stagger: 0.2
      })
  }

}
