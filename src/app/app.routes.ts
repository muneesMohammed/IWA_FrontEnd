import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { DonationComponent } from './components/donation/donation.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EventsComponent } from './components/events/events.component';
import { EventsDetailsComponent } from './components/events-details/events-details.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ProgramsDetailComponent } from './components/programs-detail/programs-detail.component';
import { FaqComponent } from './components/faq/faq.component';

export const routes: Routes = [
     { path: '', redirectTo:"/home",pathMatch:"full" },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsDetailsComponent },
      {path: 'blog', component:BlogComponent},
      {path:'pages/volunteer', component:VolunteerComponent},
      {path:'programs/donation', component:DonationComponent},
      {path:'pages/teams', component:TeamsComponent},
      {path: 'pages/events', component: EventsComponent},
      {path: 'programs/programs-list', component: ProgramsComponent},
      // {path: 'event-details', component: EventsDetailsComponent },
      {path: 'events/:id', component: EventsDetailsComponent },
      // {path: 'events/:id', component: EventsDetailsComponent,   data: { renderMode: 'client' }},

      // {path: 'programs/programs-detail', component: ProgramsDetailComponent },
      {path: 'programs/:id', component: ProgramsDetailComponent },
      {path: 'pages/faq', component: FaqComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

