import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalPageComponent } from './pages/por-capital-page/por-capital-page.component';
import { PorPaisPageComponent } from './pages/por-pais-page/por-pais-page.component';
import { PorRegionPageComponent } from './pages/por-region-page/por-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    PorCapitalPageComponent,
    PorPaisPageComponent,
    PorRegionPageComponent,
    CountryPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
