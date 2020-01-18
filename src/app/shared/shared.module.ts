import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    NavBarComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    NavBarComponent,
    CardListComponent
  ]
})
export class SharedModule { }
