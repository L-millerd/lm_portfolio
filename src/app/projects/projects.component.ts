import { Component, OnInit, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment';
import { Projects } from '../interfaces/interface';
import { QueryList } from '@angular/core';

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
          // start: "top center",
          //add restart none none none to replay
          toggleActions: "restart none none none",
          // markers: true,
        }
      });
      scrollBox.from(card, {
        duration: 2,
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
