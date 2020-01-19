import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesComponent } from './opportunities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OpportunityCardComponent } from './components/opportunity-card/opportunity-card.component';
import { MaterialModule } from 'src/app/material.module';
import { OpportunityFormComponent } from './components/opportunity-form/opportunity-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OpportunitiesComponent, OpportunityCardComponent, OpportunityFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    OpportunitiesComponent
  ]
})
export class OpportunitiesModule { }
