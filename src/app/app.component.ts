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

  private navbar: HTMLElement;

  constructor(private projectService: ProjectService, private githubService: GithubService)
  {
    //this.githubService.getPublicRepositories().subscribe((data: any) => { console.log(data); });
  }

  ngAfterViewInit()
  {
    this.navbar = document.getElementsByClassName("navigation-bar")[0] as HTMLElement;

    var that = this;

    window.onscroll = function()
    {
      that.aboutSection   .onScroll();
      that.profileSection .onScroll();
      that.projectSection .onScroll();

      console.log(that.navbar.offsetTop);
      console.log(window.pageYOffset);


      if (window.pageYOffset >= that.navbar.offsetTop)  that.navbar.classList.add    ("sticky");
      else                                              that.navbar.classList.remove ("sticky");
    }

    this.projectSection     .setProjectService(this.projectService);
    this.projectDescription .setProjectService(this.projectService);
  }
}
