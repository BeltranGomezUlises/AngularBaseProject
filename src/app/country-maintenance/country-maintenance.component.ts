import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-maintenance',
  templateUrl: './country-maintenance.component.html',
  styleUrls: ['./country-maintenance.component.css']
})
export class CountryMaintenanceComponent implements OnInit {

  countries = [];
  loading = true;

  constructor(private dataService: AppDataService,
    private router: Router) { }

  ngOnInit() {
    this.dataService.getCoutries().subscribe(data => {
      this.countries = data;
      this.loading = false;
    })
  }

  deleteCountryQuestion(id: number){

  }

  editCountry(id: number){
    this.router.navigate(["/authenticated/countries", id, "edit"]);
  }

  showCountryDetail(id: number): void{
    this.router.navigate(["/authenticated/countries", id, "detail"]);
  }

}
