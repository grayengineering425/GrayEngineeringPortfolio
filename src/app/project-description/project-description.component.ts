import { ProjectService, ProjectServiceObserver } from '../services/project-service.service';

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

    this.close.nativeElement.style.color = "white";
    this.prev .nativeElement.style.color = "white";
    this.next .nativeElement.style.color = "white";

    this.curProjectIndex = index;
  }

  public onProjectDeselected(): void
  {
  }

  public closeProjectDescription(): void
  {
    console.log("here");
    this.screenCover.classList.remove ('screen-cover-visible'  );
    this.screenCover.classList.add    ('screen-cover-invisible');

    this.close.nativeElement.style.color = "transparent";
    this.prev .nativeElement.style.color = "transparent";
    this.next .nativeElement.style.color = "transparent";

    this.curProjectIndex = -1;
  }
}
