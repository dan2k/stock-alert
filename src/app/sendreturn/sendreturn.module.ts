import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectModule } from 'ng-select';
import { SendreturnRoutingModule } from './sendreturn-routing.module';
import { SendreturnDetailComponent } from './sendreturn-detail/sendreturn-detail.component';
import { SendreturnComponent } from './sendreturn/sendreturn.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PdfViewerModule,
    FormsModule,
    SelectModule,
    NgxCurrencyModule,
    SendreturnRoutingModule
  ],
  declarations: [SendreturnComponent,SendreturnDetailComponent]
})
export class SendreturnModule { }
