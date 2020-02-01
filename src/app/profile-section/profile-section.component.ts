import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent implements OnInit
{
  private percentageValues    : Array<string>;
  private profileSection      : any;
  private percentageElements  : any;


  constructor()
  {
  }

  ngOnInit()
  {
    this.percentageValues   = ["50%", "45%", "40%", "40%", "35%", "35%", "35%"];
    this.profileSection     = document.getElementsByClassName('profile-section' )[0];
    this.percentageElements = document.getElementsByClassName('proficiency-fill') as HTMLCollectionOf<HTMLElement>;
  }

  public onScroll(): void
  {
    if (this.isElementInViewport(this.profileSection))
    {
      for (var i=0; i<this.percentageElements.length; ++i)
      {
        var percentage = this.percentageElements[i];
        percentage.style.width = this.percentageValues[i];
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
}
