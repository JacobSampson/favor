import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from '../material.module';
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [
    NavBarComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    NavBarComponent,
    LocationComponent
  ]
})
export class SharedModule { }
