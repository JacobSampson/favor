import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsoComponent } from './iso.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [IsoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IsoComponent
  ]
})
export class IsoModule { }
