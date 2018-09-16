import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAlertRoutingModule } from './list-alert-routing.module';
import { ListAlertComponent } from './list-alert.component';

@NgModule({
  imports: [
    CommonModule,
    ListAlertRoutingModule
  ],
  declarations: [ListAlertComponent]
})
export class ListAlertModule { }
