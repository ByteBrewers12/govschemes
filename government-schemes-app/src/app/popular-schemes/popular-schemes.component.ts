import { Component, OnInit } from '@angular/core';
import { SchemeService } from '../scheme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-popular-schemes',
  templateUrl: './popular-schemes.component.html',
  styleUrls: ['./popular-schemes.component.css'],
})
export class PopularSchemesComponent implements OnInit {
  popularSchemes: any[] = [];

  constructor(
    private schemeService: SchemeService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    // Fetch popular schemes using the SchemeService
    this.schemeService.getPopularSchemes().subscribe((data: any) => {
      this.popularSchemes = data;
    });
  }

  scrollToTop() {
    // Use the document object to scroll to the top of the page
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
}
