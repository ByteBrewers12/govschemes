import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { SchemeService } from './scheme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showFooter: boolean = true;
  title = 'Government Schemes Information App';

  handleClick(event: Event): void {
    event.preventDefault();
    // Your custom logic here
  }

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private schemeService: SchemeService
  ) {
    translate.setDefaultLang('en'); // Set the default language
  }

  ngOnInit(): void {
    // Listen for router navigation events
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        // Check if the current route is one of the footer links
        this.showFooter = !['/about', '/contact', '/help', '/terms'].includes(
          event.url
        );
      });
  }

  changeLanguage(lang: string, event: Event) {
    event.preventDefault();
    this.translate.use(lang);
    this.schemeService.updateLanguage(lang);
  }
}
