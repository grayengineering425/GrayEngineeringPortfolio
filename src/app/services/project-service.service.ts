import { Injectable     } from '@angular/core';
import { forEach        } from '@angular/router/src/utils/collection';

@Injectable
({
  providedIn: 'root'
})

export abstract class ProjectServiceObserver
{
  public abstract onProjectSelected  (index: number) : void;
  public abstract onProjectDeselected()              : void;
}

export class Project
{
  public title:     string;
  public summary:   string;
  public imagePath: string;
  public link:      string;

  constructor(title: string, summary: string, imagePath: string, link: string)
  {
    this.title      = title;
    this.summary    = summary;
    this.imagePath  = imagePath;
    this.link       = link;
  }
}

export class ProjectService
{
  private observers : Array<ProjectServiceObserver>;
  private projects  : Array<Project>;

  constructor()
  {
    this.observers  = new Array<ProjectServiceObserver>();
    this.projects   = new Array<Project>();

    var summary0    = "Created a face tracking system using Tensorflow and python for use in a home security/automation system.";
    var imagePath0  = "https://www.techryn.com/wp-content/uploads/2019/10/Artificial-Intelligence.jpg";
    var link0       = "https://github.com/grayengineering425/HomeAiAutomation/tree/master/Experimental/face_tracking";
    var p0          = new Project("Face Tracking AI", summary0, imagePath0, link0);

    var summary1    = "Created a facial recognition system using Tensorflow and python for use in a home security/automation system.";
    var imagePath1  = "";
    var link1       = "https://github.com/grayengineering425/HomeAiAutomation/tree/master/Experimental/facial_recognition";
    var p1          = new Project("Facial Recognition AI", summary1, imagePath1, link1);

    var summary2    = "Created a voice recognition system using Tensorflow and python for use in a home security/automation system.";
    var imagePath2  = "";
    var link2       = "https://github.com/grayengineering425/HomeAiAutomation/tree/master/Experimental/keyword_recognition";
    var p2          = new Project("Keyword Recognition", summary2, imagePath2, link2);

    var summary3    = "Worked as a developer on Philips Intrasight. A ground up rebuild of Philips coronary tool suite for use in modern Catheter Labs.";
    var imagePath3  = "";
    var link3       = "https://www.usa.philips.com/healthcare/resources/landing/intrasight";
    var p3          = new Project("Philips Intrasight", summary3, imagePath3, link3);

    var summary4    = "Created a home automation system using Angular, Python, and C++. Used artificial intelligence to automate household tasks and install a modern security system in my house.";
    var imagePath4  = "";
    var link4       = "https://github.com/grayengineering425/HomeAiAutomation";
    var p4          = new Project("Home Automation", summary4, imagePath4, link4);

    var summary5    = "Created this website! Check out the source code!";
    var imagePath5  = "";
    var link5       = "https://github.com/grayengineering425/GrayEngineeringPortfolio";
    var p5          = new Project("Personal Portfolio", summary5, imagePath5, link5);

    this.projects.push(p0);
    this.projects.push(p1);
    this.projects.push(p2);
    this.projects.push(p3);
    this.projects.push(p4);
    this.projects.push(p5);
  }

  public getProject(index: number): Project
  {
    if (index < 0 || index >= this.projects.length) return null;

    return this.projects[index];
  }

  public selectProject(index: number): void
  {
    if (index < 0 || index >= this.projects.length) return;

    for (var i=0; i<this.observers.length; ++i) this.observers[i].onProjectSelected(index);
  }

  public register(observer: ProjectServiceObserver): void
  {
    this.observers.push(observer);
  }
}
