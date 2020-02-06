import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor()
  {
    window.onresize = function ()
    {
      var topContactPageWrapper = document.getElementsByClassName("top-contact-page-wrapper")[0] as HTMLElement;
      var topContactPage        = document.getElementsByClassName("top-contact-page"        )[0] as HTMLElement;

      var halfWidth = (topContactPageWrapper.getBoundingClientRect().right - topContactPageWrapper.getBoundingClientRect().left) / 2.0;

      topContactPage.style.borderLeft   = halfWidth.toString() + "px solid transparent";
      topContactPage.style.borderRight  = halfWidth.toString() + "px solid transparent";
    }
  }

  ngOnInit()
  {
    var topContactPageWrapper = document.getElementsByClassName("top-contact-page-wrapper")[0] as HTMLElement;
    var topContactPage        = document.getElementsByClassName("top-contact-page"        )[0] as HTMLElement;

    var halfWidth = (topContactPageWrapper.getBoundingClientRect().right - topContactPageWrapper.getBoundingClientRect().left) / 2.0;

    topContactPage.style.borderLeft   = halfWidth.toString() + "px solid transparent";
    topContactPage.style.borderRight  = halfWidth.toString() + "px solid transparent";
  }

}
