import { NgxCurrencyModule } from 'ngx-currency';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'ng-select';
import { SendrepairRoutingModule } from './sendrepair-routing.module';
import { SendrepairComponent } from './sendrepair/sendrepair.component';
import { SendrepairDetailComponent } from './sendrepair-detail/sendrepair-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PdfViewerModule,
    FormsModule,
    SelectModule,
    NgxCurrencyModule,
    SendrepairRoutingModule
  ],
  declarations: [SendrepairComponent,SendrepairDetailComponent]
})
export class SendrepairModule { }
