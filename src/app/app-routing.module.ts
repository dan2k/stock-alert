import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlertComponent } from './list-alert/list-alert.component';
import { BorrowComponent } from './borrow/borrow.component';
import { SetSpareComponent } from './set-spare/set-spare.component';
import { BorrowDetailComponent } from './borrow-detail/borrow-detail.component';


const routes: Routes = [
  { path: '', component: ListAlertComponent },
  { path: 'borrow', component: BorrowComponent },
  { path: 'borrowdetail/:docno/:stockid/:empid/:remark/:thiname/:object/:draw_date/:return_expect', component: BorrowDetailComponent},
  { path: 'setspare', component: SetSpareComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
