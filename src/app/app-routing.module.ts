import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { IsoComponent } from './modules/iso/iso.component';
import { OpportunitiesComponent } from './modules/opportunities/opportunities.component';

const ROUTES: Routes = [
  { path: '', component: LandingComponent },
  { path: 'iso', component: IsoComponent },
  { path: 'opportunities', component: OpportunitiesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
