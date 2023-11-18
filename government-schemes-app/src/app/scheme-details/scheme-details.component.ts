import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SchemeService } from '../scheme.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-scheme-details',
  templateUrl: './scheme-details.component.html',
  styleUrls: ['./scheme-details.component.css'],
})
export class SchemeDetailsComponent implements OnInit {
  scheme: any;

  constructor(
    private route: ActivatedRoute,
    private schemeService: SchemeService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap): Observable<any> => {
          const idParam = params.get('id');
          const id = Number(idParam);

          if (!isNaN(id)) {
            return this.schemeService.getSchemeById(id);
          } else {
            console.error('Invalid ID parameter'); // Handle the error as needed
            return new Observable(); // or return an observable with an appropriate error state
          }
        })
      )
      .subscribe((data) => {
        this.scheme = data;
      });
  }
}
