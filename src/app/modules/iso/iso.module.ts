import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsoComponent } from './iso.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IsoCardComponent } from './components/iso-card/iso-card.component';

@NgModule({
  declarations: [IsoComponent, IsoCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IsoComponent
  ]
})
export class IsoModule { }
