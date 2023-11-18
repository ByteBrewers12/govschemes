import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-recent-schemes',
  templateUrl: './recent-schemes.component.html',
  styleUrls: ['./recent-schemes.component.css'],
})
export class RecentSchemesComponent implements OnInit {
  recentSchemes: any[] = [];

  constructor(private http: HttpClient, private translate: TranslateService) {}

  ngOnInit(): void {
    // Fetch recent schemes from the API endpoint
    this.http
      .get('http://localhost:3000/recent-schemes')
      .subscribe((data: any) => {
        this.recentSchemes = data;
      });
  }
  scrollToTop() {
    // Use the document object to scroll to the top of the page
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
}
