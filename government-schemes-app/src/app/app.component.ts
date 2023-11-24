import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Government Schemes Information App';
  handleClick(event: Event): void {
    event.preventDefault();
    // Your custom logic here
  }
  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    translate.setDefaultLang('en'); // Set the default language
  }
  changeLanguage(lang: string, event: Event) {
    event.preventDefault();
    this.translate.use(lang);
  }
}
