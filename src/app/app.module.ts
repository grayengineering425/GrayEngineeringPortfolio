import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAnimationComponent } from './main-animation/main-animation.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAnimationComponent,
    AboutSectionComponent,
    ProfileSectionComponent,
    ProjectSectionComponent,
    ProjectDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
