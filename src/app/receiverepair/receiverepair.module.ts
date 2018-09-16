import { ReceiverepairComponent } from './receiverepair.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiverepairRoutingModule } from './receiverepair-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReceiverepairRoutingModule
  ],
  declarations: [ReceiverepairComponent]
})
export class ReceiverepairModule { }
