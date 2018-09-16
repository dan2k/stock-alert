import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowRoutingModule } from './borrow-routing.module';
import { BorrowComponent } from './borrow/borrow.component';
import { BorrowDetailComponent } from './borrow-detail/borrow-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BorrowRoutingModule
  ],
  declarations: [BorrowComponent,BorrowDetailComponent]
})
export class BorrowModule { }
