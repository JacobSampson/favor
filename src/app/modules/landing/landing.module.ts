import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { IsoCardComponent } from './components/iso-card/iso-card.component';

@NgModule({
  declarations: [LandingComponent, IsoCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
