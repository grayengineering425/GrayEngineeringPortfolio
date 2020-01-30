import { ProjectService, ProjectServiceObserver, Project } from '../services/project-service.service';

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.css']
})
export class ProjectDescriptionComponent extends ProjectServiceObserver implements OnInit
{
  private projectService  : ProjectService;
  private screenCover     : any;
  private curProjectIndex : number;
  private curProject      : Project;

  @ViewChild('close') close;
  @ViewChild('prev' ) prev;
  @ViewChild('next' ) next;

  constructor()
  {
    super();
  }

  ngOnInit()
  {
    this.screenCover      = document.getElementsByClassName('screen-cover')[0];
    this.curProjectIndex  = -1;
  }

  public setProjectService(service: ProjectService)
  {
    this.projectService = service;
    this.projectService.register(this);
  }

  public onProjectSelected(index: number) : void
  {
    this.screenCover.classList.add    ('screen-cover-visible'  );
    this.screenCover.classList.remove ('screen-cover-invisible');

    this.curProjectIndex  = index;
    this.curProject       = this.projectService.getProject(index);

    var image = document.getElementsByClassName("project-image")[0] as HTMLElement;
    image.style.content = "url('" + this.curProject.imagePath + "')";

    console.log(this.curProject.title);

    document.getElementsByClassName("title")  [0].innerHTML = this.curProject.title;
    document.getElementsByClassName("summary")[0].innerHTML = this.curProject.summary;
  }

  public onProjectDeselected(): void
  {
  }

  public closeProjectDescription(): void
  {
    console.log("here");
    this.screenCover.classList.remove ('screen-cover-visible'  );
    this.screenCover.classList.add    ('screen-cover-invisible');

    this.curProjectIndex = -1;
  }

  public selectNextProject(): void
  {
    this.projectService.selectProject(this.curProjectIndex + 1)
  }

  public selectPrevProject(): void
  {
    this.projectService.selectProject(this.curProjectIndex - 1)
  }
}
