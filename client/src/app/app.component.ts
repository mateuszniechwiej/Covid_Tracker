import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries = [{country:'test'}]

  constructor(private api: ApiService) {
    this.getCountries();
  }
  getCountries = () => {
    this.api.getAllCountries().subscribe({
      next:
        (data) => this.countries = data
      ,
      error: 
      (err) => console.error(err),
      complete: () =>console.info('complete')})
    
    
    }
}
