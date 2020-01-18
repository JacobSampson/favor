import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsoComponent } from './iso.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IsoCardComponent } from './components/iso-card/iso-card.component';
import { MaterialModule } from 'src/app/material.module';
import { IsoFormComponent } from './components/iso-form/iso-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IsoComponent, IsoCardComponent, IsoFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    IsoComponent
  ]
})
export class IsoModule { }
