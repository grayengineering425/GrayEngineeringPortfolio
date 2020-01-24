import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})

export class AboutSectionComponent implements OnInit
{
  public energeticSection         : any;
  public energeticTextContainer   : any;
  public experiencedSection       : any;
  public experiencedTextContainer : any;
  public passionateSection        : any;
  public passionateTextContainer  : any;

  constructor()
  {
  }

  ngOnInit()
  {
    this.energeticSection        = document.getElementsByClassName('energetic-section'         )[0];
    this.energeticTextContainer  = document.getElementsByClassName('energetic-text-container'  )[0];
    this.experiencedSection      = document.getElementsByClassName('experienced-section'       )[0];
    this.experiencedTextContainer= document.getElementsByClassName('experienced-text-container')[0];
    this.passionateSection       = document.getElementsByClassName('passionate-section'        )[0];
    this.passionateTextContainer = document.getElementsByClassName('passionate-text-container' )[0];
  }

  public onScroll(): void
  {
      if (this.isElementInViewport(this.energeticSection  )) this.energeticTextContainer   .classList.add("is-visible");
      if (this.isElementInViewport(this.experiencedSection)) this.experiencedTextContainer .classList.add("is-visible");
      if (this.isElementInViewport(this.passionateSection )) this.passionateTextContainer  .classList.add("is-visible");
  }

  private isElementInViewport(el: any): boolean
  {
    var rect = el.getBoundingClientRect();
      
    return ((rect.top <= 0 && rect.bottom >= 0) ||
              (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight ||   document.documentElement.clientHeight)) ||
            (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)));
  }
}
