import { Component } from '@angular/core';
import {ViewEncapsulation, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit
{
  title = 'GrayEngineeringPortfolio';

  @ViewChild('aboutSection'   ) aboutSection;
  @ViewChild('profileSection' ) profileSection;
  @ViewChild('projectSection' ) projectSection;

  ngAfterViewInit()
  {
    var that = this;

    window.onscroll = function()
    {
      that.aboutSection   .onScroll();
      that.profileSection .onScroll();
      that.projectSection .onScroll();
    }
  }
}
