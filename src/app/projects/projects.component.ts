import { Component, OnInit, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:any[] = [];
  server = environment.server;

  constructor(private cs: CommonService) { }

  // @ViewChildren('projectWrapper')
  // private projectCards: QueryList<'projectWrapper'>;

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.cs.getProjects().subscribe( res =>{
      this.projects = res.data;
    })

  }

  ngAfterViewInit(){
    this.initScrollTriggers();
  }

  initScrollTriggers() {
    document.querySelectorAll(".projectCardWrapper").forEach(card =>{
      const scrollBox = gsap.timeline({
        scrollTrigger:{
          trigger: card,
          // start: "top center",
          toggleActions: "restart none none none",
        }
      });
      scrollBox.from(card, {
        duration: 2,
        opacity: 0,
        x:-200,
        stagger: 0.5,
      })
    })
  }

  // initScrollTriggers() {
  //   this.projectCards.forEach(card =>{
  //     const scrollBox = gsap.timeline({
  //       scrollTrigger:{
  //         trigger: card,
  //         toggleActions: "restart none none none",
  //       }
  //     });
  //     scrollBox.from(card, {
  //       duration: 1,
  //       opacity: 0,
  //       x:-200,
  //       stagger: 0.5,
  //       // ease: "back",
  //     })
  //   })
  // }


}
