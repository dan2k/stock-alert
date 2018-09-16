import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendreturnButNoReceiveRoutingModule } from './sendreturn-but-no-receive-routing.module';
import { SendreturnButNoReceiveComponent } from './sendreturn-but-no-receive.component';

@NgModule({
  imports: [
    CommonModule,
    SendreturnButNoReceiveRoutingModule
  ],
  declarations: [SendreturnButNoReceiveComponent]
})
export class SendreturnButNoReceiveModule { }
