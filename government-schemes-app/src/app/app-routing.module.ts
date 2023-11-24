// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemeListComponent } from './scheme-list/scheme-list.component';
import { SchemeDetailsComponent } from './scheme-details/scheme-details.component';
import { RecentSchemesComponent } from './recent-schemes/recent-schemes.component';
import { PopularSchemesComponent } from './popular-schemes/popular-schemes.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpsComponent } from './helps/helps.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: '', component: SchemeListComponent },
  { path: 'details/:id', component: SchemeDetailsComponent },
  { path: 'recent-schemes', component: RecentSchemesComponent },
  { path: 'popular-schemes', component: PopularSchemesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpsComponent },
  { path: 'terms', component: TermsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
