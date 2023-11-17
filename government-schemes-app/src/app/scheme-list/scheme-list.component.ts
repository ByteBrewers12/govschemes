import { Component, OnInit } from '@angular/core';
import { SchemeService } from '../scheme.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scheme-list',
  templateUrl: './scheme-list.component.html',
  styleUrls: ['./scheme-list.component.css'],
})
export class SchemeListComponent implements OnInit {
  schemes: any[] = [];
  filteredSchemes: any[] = [];
  professionSearchTerm: string = '';
  ageSearchTerm: number = 0;
  genderSearchTerm: string = '';
  nameSearchTerm: string = '';
  isSearchPerformed: boolean = false;

  selectedSearchCriteria: string = 'profession'; // Default search criteria
  ageOptions: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

  constructor(private schemeService: SchemeService) {}

  @ViewChild('searchDropdown', { static: false }) searchDropdown!: ElementRef;

  // Function to toggle the dropdown menu
  toggleDropdown() {
    this.searchDropdown.nativeElement.classList.toggle('show');
  }

  ngOnInit(): void {
    this.schemeService.getSchemes().subscribe((data) => {
      this.schemes = data;
      this.filteredSchemes = this.schemes;
      console.log(this.schemes);
    });
  }

  searchSchemes(): void {
    this.isSearchPerformed = true;
    this.filteredSchemes = this.schemes.filter((scheme) => {
      const matchesProfession =
        this.selectedSearchCriteria === 'profession'
          ? scheme.profession.toLowerCase() ===
            this.professionSearchTerm.toLowerCase()
          : true;
      const matchesAge =
        this.selectedSearchCriteria === 'age'
          ? scheme.minAge <= this.ageSearchTerm
          : true;
      const matchesGender =
        this.selectedSearchCriteria === 'gender'
          ? scheme.gender.toLowerCase() === this.genderSearchTerm.toLowerCase()
          : true;
      const matchesName =
        this.selectedSearchCriteria === 'name'
          ? scheme.name
              .toLowerCase()
              .includes(this.nameSearchTerm.toLowerCase())
          : true;
      return matchesProfession && matchesAge && matchesGender && matchesName;
    });
  }
  displaySchemeDetails(scheme: any): void {
    scheme.showDetails = !scheme.showDetails;
  }
}
