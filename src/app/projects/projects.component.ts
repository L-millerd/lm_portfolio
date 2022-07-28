import { Component, OnInit, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { CommonService } from '../services/common.service';
import { Projects } from '../interfaces/interface';
import { QueryList } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:any[] = [];

  constructor(private cs: CommonService) { }

  // @ViewChildren('projectWrapper')
  // private projectCards: QueryList<'projectWrapper'>;

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);

    this.initScrollTriggers();

    this.cs.getProjects().subscribe( res =>{
      // console.log(res);
      this.projects = res.data;
    })

  }

  ngAfterViewInit(){
    // this.projectCards.changes.subscribe( res=>{
    //   console.log("observable", res);
    // })
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
