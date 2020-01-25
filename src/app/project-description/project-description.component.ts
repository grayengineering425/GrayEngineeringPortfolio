import { ProjectService, ProjectServiceObserver } from '../services/project-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.css']
})
export class ProjectDescriptionComponent extends ProjectServiceObserver implements OnInit
{
  private projectService: ProjectService;
  private screenCover   : any;

  constructor()
  {
    super();
  }

  ngOnInit()
  {
    this.screenCover = document.getElementsByClassName('screen-cover')[0];
  }

  public setProjectService(service: ProjectService)
  {
    this.projectService = service;
    this.projectService.register(this);
  }

  public onProjectSelected(index: number) : void
  {
    this.screenCover.classList.add('screen-cover-visible');
  }

  public onProjectDeselected(): void
  {
  }
}
