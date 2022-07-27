import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name:string = '';
  email:string='';
  emailSubject:string='';
  message:string='';
  submitted = false;

  constructor(private cs: CommonService) {
   }

  submit(){
    let messageBody={
      data: {
        "name": this.name,
        "email": this.email,
        "emailSubject": this.emailSubject,
        "message": this.message
      }
    }
    this.cs.submitMessage(messageBody).subscribe( res=>{
      console.log(res);
    });
    this.submitted=true;
  }

  ngOnInit(): void {

  }


}




