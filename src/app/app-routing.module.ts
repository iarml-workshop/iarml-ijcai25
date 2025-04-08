import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { PublicationsComponent } from './publications/publications.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path : 'members', component : MembersComponent},
  { path : 'publications', component : PublicationsComponent},
  { path : 'ressources', component : SoftwareComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
