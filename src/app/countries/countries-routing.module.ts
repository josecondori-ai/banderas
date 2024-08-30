import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalPageComponent } from './pages/por-capital-page/por-capital-page.component';
import { PorPaisPageComponent } from './pages/por-pais-page/por-pais-page.component';
import { PorRegionPageComponent } from './pages/por-region-page/por-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes:Routes=[
    {
        path:'por-capital',
        component:PorCapitalPageComponent
    },
    {
        path:'por-pais',
        component:PorPaisPageComponent
    },
    {
        path:'por-region',
        component:PorRegionPageComponent
    }
    ,
    {
        path:'by/:id',
        component:CountryPageComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
   
})
export class CountriesRoutingModule { }
