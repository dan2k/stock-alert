import { SendreturnComponent } from './sendreturn/sendreturn.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendreturnDetailComponent } from './sendreturn-detail/sendreturn-detail.component';

const routes: Routes = [
  { path: 'list', component: SendreturnComponent },
  { path: 'detail/:transfer_docno', component: SendreturnDetailComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendreturnRoutingModule { }
