import { SendrepairDetailComponent } from './sendrepair-detail/sendrepair-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendrepairComponent } from './sendrepair/sendrepair.component';

const routes: Routes = [
  { path: 'list', component: SendrepairComponent },
  { path: 'detail/:transfer_docno', component: SendrepairDetailComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: 'list', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendrepairRoutingModule { }
