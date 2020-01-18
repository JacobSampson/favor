import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesComponent } from './opportunities.component';

@NgModule({
  declarations: [OpportunitiesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OpportunitiesComponent
  ]
})
export class OpportunitiesModule { }
