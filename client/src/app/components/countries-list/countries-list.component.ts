import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/models/covid.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styles: [
  ]
})
export class CountriesListComponent implements OnInit {
  countries?: Covid[];
  currentCountry: Covid = {};
  currentIndex = -1;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.retrieveCovidData();
  }

  retrieveCovidData(): void {
    this.apiService.getAll()
    .subscribe({
      next: (data) => {
        this.countries = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
