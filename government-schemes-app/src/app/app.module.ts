import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SchemeListComponent } from './scheme-list/scheme-list.component';
import { SchemeDetailsComponent } from './scheme-details/scheme-details.component';
import { AppRoutingModule } from './app-routing.module';

import { RecentSchemesComponent } from './recent-schemes/recent-schemes.component';
import { PopularSchemesComponent } from './popular-schemes/popular-schemes.component';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from './translation/translation.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { HelpsComponent } from './helps/helps.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SchemeListComponent,
    SchemeDetailsComponent,
    RecentSchemesComponent,
    PopularSchemesComponent,
    AboutComponent,
    ContactComponent,
    TermsComponent,
    HelpsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslationModule, // Include TranslationModule
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
