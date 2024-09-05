import { Component } from '@angular/core';
import { CountriService } from '../../services/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-por-capital-page',
  templateUrl: './por-capital-page.component.html',
  styles: ``
})
export class PorCapitalPageComponent {
   countries:Country[]=[]

  constructor(public countrisServices:CountriService){}

  searchBycapital(term:string):void{
   this.countrisServices.searchCapital(term).subscribe(countries=>{
    this.countries=countries})
  }

}
