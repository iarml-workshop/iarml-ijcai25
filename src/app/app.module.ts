import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DatesComponent } from './dates/dates.component';
import { TopicsComponent } from './topics/topics.component';
import { SubmissionComponent } from './submission/submission.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { CommitteeComponent } from './committee/committee.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroductionComponent,
    DatesComponent,
    TopicsComponent,
    SubmissionComponent,
    SpeakersComponent,
    CommitteeComponent,
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
