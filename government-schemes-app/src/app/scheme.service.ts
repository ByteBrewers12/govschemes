import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

type ApiUrls = {
  [key: string]: string;
  en: string;
  hi: string;
  gu: string;
};

@Injectable({
  providedIn: 'root',
})
export class SchemeService {
  private apiUrls: ApiUrls = {
    en: 'http://localhost:3000',
    hi: 'http://localhost:3001',
    gu: 'http://localhost:3002',
  };

  private currentLanguage: string;

  constructor(private http: HttpClient, private translate: TranslateService) {
    // Check if the current language is undefined and set a default
    this.currentLanguage = this.translate.currentLang || 'en';
    console.log('Current language:', this.currentLanguage);

    // Subscribe to language changes
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLanguage = event.lang;
      console.log('Language changed:', this.currentLanguage);
    });
  }

  updateLanguage(lang: string): void {
    this.translate.use(lang);
  }

  getSchemes(): Observable<any[]> {
    const url = `${this.apiUrls[this.currentLanguage]}/filtered-schemes`;
    return this.http.get<any[]>(url);
  }

  getSchemeById(id: number): Observable<any> {
    const url = `${this.apiUrls[this.currentLanguage]}/filtered-schemes/${id}`;
    return this.http.get<any>(url);
  }

  getRecentSchemes(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrls[this.currentLanguage]}/recent-schemes`
    );
  }

  getPopularSchemes(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrls[this.currentLanguage]}/popular-schemes`
    );
  }
}
