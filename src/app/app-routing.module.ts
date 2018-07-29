import { SendrepairComponent } from './sendrepair/sendrepair.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlertComponent } from './list-alert/list-alert.component';
import { BorrowComponent } from './borrow/borrow.component';
import { SetSpareComponent } from './set-spare/set-spare.component';
import { BorrowDetailComponent } from './borrow-detail/borrow-detail.component';
import { SendrepairDetailComponent } from './sendrepair-detail/sendrepair-detail.component';


const routes: Routes = [
  { path: '', component: ListAlertComponent },
  { path: 'borrow', component: BorrowComponent },
  { path: 'borrowdetail/:docno/:stockid/:empid/:remark/:thiname/:object/:draw_date/:return_expect', component: BorrowDetailComponent},
  { path: 'setspare', component: SetSpareComponent },
  { path: 'sendrepair', component: SendrepairComponent },
  { path: 'sendrepair-detail/:transfer_docno', component: SendrepairDetailComponent},
  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
