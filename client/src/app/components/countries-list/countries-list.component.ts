import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/models/covid.model';
import { ApiService } from 'src/app/service/api.service';
import { CountryDetailsComponent } from '../country-details/country-details.component';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: []
})
export class CountriesListComponent implements OnInit {
  countries?: Covid[];
  currentCountry: Covid = {};
  currentIndex = -1;

  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.retrieveCountries();
    }
  
  retrieveCountries(): void {
    this.apiService.getAll()
    .subscribe({
      next: (data) => {
        this.countries = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  refreshList(): void {
    this.retrieveCountries();
    this.currentCountry = {};
    this.currentIndex = -1;
  }
  setActiveCountry(country: Covid, index: number): void {
    this.currentCountry = country;
    this.currentIndex = index;
  }
  removeAllCountries(): void {
    this.apiService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
}
