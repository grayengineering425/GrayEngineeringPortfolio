import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable
({
  providedIn: 'root'
})

export abstract class ProjectServiceObserver
{
  public abstract onProjectSelected  (index: number) : void;
  public abstract onProjectDeselected()              : void;
}

export class ProjectService
{
  private observers: Array<ProjectServiceObserver>;

  constructor()
  {
    this.observers = new Array<ProjectServiceObserver>();
  }

  public selectProject(index: number): void
  {
    for (var i=0; i<this.observers.length; ++i) this.observers[i].onProjectSelected(index);
  }

  public register(observer: ProjectServiceObserver): void
  {
    this.observers.push(observer);
  }
}
