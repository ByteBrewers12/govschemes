import { Component, OnInit } from '@angular/core';
import { SchemeService } from '../scheme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-recent-schemes',
  templateUrl: './recent-schemes.component.html',
  styleUrls: ['./recent-schemes.component.css'],
})
export class RecentSchemesComponent implements OnInit {
  recentSchemes: any[] = [];

  constructor(
    private schemeService: SchemeService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    // Fetch recent schemes using the SchemeService
    this.schemeService.getRecentSchemes().subscribe((data: any) => {
      this.recentSchemes = data;
    });
  }

  scrollToTop() {
    // Use the document object to scroll to the top of the page
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
}
