import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  projects:any[] = [];

  constructor(private cs: CommonService) { }

  // private projectCards: QueryList<ProjectsComponent>;

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.initScrollTriggers();


    this.cs.getProjects().subscribe( res =>{
      console.log(res);
      this.projects = res.data;
    })

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
