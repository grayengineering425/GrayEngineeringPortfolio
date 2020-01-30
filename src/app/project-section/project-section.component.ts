import { ProjectService, Project } from '../services/project-service.service';

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent implements OnInit {
  private projectGrid   : any;
  private projectItems  : any;
  private mediaQuery    : any;
  private projectService: ProjectService;
  private projects      : Array<Project>;

  constructor(private ref: ChangeDetectorRef)
  {
  }

  ngOnInit()
  {
    console.log("init");
    this.projectGrid  = document.getElementsByClassName('project-grid' )[0];
    this.projectItems = document.getElementsByClassName('project-item'    ) as HTMLCollectionOf<HTMLElement>;

    this.mediaQuery   = window.matchMedia( "(max-device-width: 1440px)");

  }

  public setProjectService(service: ProjectService)
  {
    this.projectService = service;
    this.projects       = this.projectService.getProjects();
    this.ref.detectChanges();
  }

  public onScroll(): void
  {
    if (this.isElementInViewport(this.projectGrid) && !this.mediaQuery.matches)
    {
      for (var i=0; i<this.projectItems.length; ++i)
      {
        var item = this.projectItems[i];
        item.classList.add("project-item-visible");
      }
    }
  }

  private isElementInViewport(el: any): boolean
  {
    var rect = el.getBoundingClientRect();
      
    return ((rect.top <= 0 && rect.bottom >= 0) ||
              (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight ||   document.documentElement.clientHeight)) ||
            (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)));
  }

  public onItemClicked(index: number): void
  {
    console.log(index);
    this.projectService.selectProject(index);
  }
}
