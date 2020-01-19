import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { IsoComponent } from './modules/iso/iso.component';
import { OpportunitiesComponent } from './modules/opportunities/opportunities.component';
import { FirebaseGuard } from './core/firebase/firebase.guard';

const ROUTES: Routes = [
  { path: '', component: LandingComponent },
  { path: 'iso', component: IsoComponent, canActivate: [FirebaseGuard] },
  { path: 'opportunities', component: OpportunitiesComponent, canActivate: [FirebaseGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
