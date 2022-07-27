import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  // ngOnInit(): void {
  //   gsap.from(".projectCardWrapper", {
  //     duration: 2,
  //     opacity: 0,
  //     x:-300,
  //     stagger: 0.5,
  //     ease: "back",
  //     });

  // }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.initScrollTriggers();
  }

  initScrollTriggers() {
    document.querySelectorAll(".projectCardWrapper").forEach(card =>{
      const scrollBox = gsap.timeline({
        scrollTrigger:{
          trigger: card,
          toggleActions: "restart none none none",
        }
      });
      scrollBox.from(card, {
        duration: 1,
        opacity: 0,
        x:-200,
        stagger: 0.5,
        // ease: "back",
      })
    })
  }

}
