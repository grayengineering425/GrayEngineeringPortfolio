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

  constructor(private projectService: ProjectService, private githubService: GithubService)
  {
    this.githubService.getPublicRepositories().subscribe((data: any) => { console.log(data); });
  }

  ngAfterViewInit()
  {
    var that = this;

    window.onscroll = function()
    {
      that.aboutSection   .onScroll();
      that.profileSection .onScroll();
      that.projectSection .onScroll();
    }

    this.projectSection     .setProjectService(this.projectService);
    this.projectDescription .setProjectService(this.projectService);
  }
}
