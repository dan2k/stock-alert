import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetSpareRoutingModule } from './set-spare-routing.module';
import { SetSpareComponent } from './set-spare.component';

@NgModule({
  imports: [
    CommonModule,
    SetSpareRoutingModule
  ],
  declarations: [SetSpareComponent]
})
export class SetSpareModule { }
