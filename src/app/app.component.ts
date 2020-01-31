import { ProjectService } from './services/project-service.service'
import { GithubService  } from './services/github-service.service'

import { Component } from '@angular/core';
import {ViewEncapsulation, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ProjectService, GithubService]
})
export class AppComponent implements AfterViewInit
{
  title = 'GrayEngineeringPortfolio';

  @ViewChild('aboutSection'       ) aboutSection;
  @ViewChild('profileSection'     ) profileSection;
  @ViewChild('projectSection'     ) projectSection;
  @ViewChild('projectDescription' ) projectDescription;

  private animation:  HTMLElement;
  private navbar:     HTMLElement;
  private about:      HTMLElement;
  private profile:    HTMLElement;
  private projects:   HTMLElement;
  private contact:    HTMLElement;

  private navigationItems: any;

  constructor(private projectService: ProjectService, private githubService: GithubService)
  {
    //this.githubService.getPublicRepositories().subscribe((data: any) => { console.log(data); });
  }

  ngAfterViewInit()
  {
    this.animation        = document.getElementsByClassName("animation-background"        )[0]  as HTMLElement;
    this.navbar           = document.getElementsByClassName("navigation-bar"              )[0]  as HTMLElement;
    this.about            = document.getElementsByClassName("about-section"               )[0]  as HTMLElement;
    this.profile          = document.getElementsByClassName("profile-section"             )[0]  as HTMLElement;
    this.projects         = document.getElementsByClassName("project-grid"                )[0]  as HTMLElement;
    this.contact          = document.getElementsByClassName("main-contact-page"           )[0]  as HTMLElement;
    this.navigationItems = document.getElementsByClassName("navigation-underline") as HTMLCollectionOf<HTMLElement>;
    

    var that = this;

    window.onscroll = function()
    {
      that.aboutSection   .onScroll();
      that.profileSection .onScroll();
      that.projectSection .onScroll();

      var cutoff = that.about.offsetTop - that.navbar.clientHeight;

      if (window.pageYOffset >= cutoff)  that.navbar.classList.add    ("sticky");
      else                               that.navbar.classList.remove ("sticky");

      var bodyRect      = document.body .getBoundingClientRect();
      var animationRect = that.animation.getBoundingClientRect()
      var aboutRect     = that.about    .getBoundingClientRect();
      var profileRect   = that.profile  .getBoundingClientRect();
      var projectsRect  = that.projects .getBoundingClientRect();
      var contactRect   = that.contact  .getBoundingClientRect();

      var aboutTop    = aboutRect.top     - bodyRect.top;
      var aboutBottom = aboutRect.bottom  - bodyRect.top;

      var profileTop    = profileRect.top    - bodyRect.top;
      var profileBottom = profileRect.bottom - bodyRect.top;

      //var aboutTop    = aboutRect.top     - bodyRect.top;
      //var aboutBottom = aboutRect.bottom - bodyRect.top;

      //var aboutTop    = aboutRect.top     - bodyRect.top;
      //var aboutBottom = aboutRect.bottom  - bodyRect.top;



      var aboutMid    = (aboutBottom    - aboutTop  ) / 2.0;
      var profileMid  = (profileBottom  - profileTop) / 2.0;
      //var projectsMid = (projectsRect .bottom - projectsRect.top) / 2.0;
      //var contactMid  = (contactRect  .bottom - contactRect .top) / 2.0;

      console.log(aboutMid);
      console.log(profileMid);

      if (window.pageYOffset >= aboutMid && window.pageYOffset < profileMid)
      {
        for (var i = 0; i < that.navigationItems.length; ++i) that.navigationItems[i].classList.remove("navigation-underline-selected");

        that.navigationItems[1].classList.add("navigation-underline-selected");
      }
      else if (window.pageYOffset >= profileMid /*&& window.pageYOffset < projectsMid*/)
      {
        for (var i = 0; i < that.navigationItems.length; ++i) that.navigationItems[i].classList.remove("navigation-underline-selected");

        that.navigationItems[2].classList.add("navigation-underline-selected");
      }
      //else if (window.pageYOffset >= projectsMid && window.pageYOffset < contactMid)
      //{
      //  for (var i = 0; i < that.navigationItems.length; ++i) that.navigationItems[i].classList.remove("navigation-underline-selected");

      //  that.navigationItems[3].classList.add("navigation-underline-selected");
      //}
      //else if (window.pageYOffset >= contactMid)
      //{
      //  for (var i = 0; i < that.navigationItems.length; ++i) that.navigationItems[i].classList.remove("navigation-underline-selected");

      //  that.navigationItems[4].classList.add("navigation-underline-selected");
      //}
    }

    this.projectSection     .setProjectService(this.projectService);
    this.projectDescription .setProjectService(this.projectService);
  }
}
