import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Covid } from 'src/app/models/covid.model';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: []
})
export class CountryDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentCountry: Covid = {
    id: '',
    country: '',
    code: '',
    total_cases: '',   
    total_deaths: '',
    total_recovered: '',
 
  };

  message = ''
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCountry(this.route.snapshot.params["id"]);
    }
  }
  getCountry(id : any) : void {
    this.apiService.get(id)
    .subscribe({
      next: (data) => {
        this.currentCountry = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    })
  }
  updateCountry(): void {
    this.message = '';
    this.apiService.update(this.currentCountry.id, this.currentCountry)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This country was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteCountry(): void {
    this.apiService.delete(this.currentCountry.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/countries']);
        },
        error: (e) => console.error(e)
      });
  }

}
