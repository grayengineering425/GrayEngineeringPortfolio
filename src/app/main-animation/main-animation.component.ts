import { Component, OnInit } from '@angular/core';

import * as smoothscroll from "smoothscroll-polyfill";

@Component({
  selector: 'app-main-animation',
  templateUrl: './main-animation.component.html',
  styleUrls: ['./main-animation.component.css']
})
export class MainAnimationComponent implements OnInit {

  constructor()
  {
    smoothscroll.polyfill();
  }

  ngOnInit()
  {
  }

  public scrollMain(): void
  {
      document.querySelector('.navigation-bar').scrollIntoView({ behavior: 'smooth' });
  }
}
