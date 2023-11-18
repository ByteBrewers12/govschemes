import { Component } from '@angular/core';
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
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // Set the default language
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
