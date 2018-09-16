import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiverepairComponent } from './receiverepair.component';

const routes: Routes = [
  { path: 'receiverepair', component: ReceiverepairComponent },
  { path: '', redirectTo: 'receiverepair', pathMatch: 'full' },
  { path: '**', redirectTo: 'receiverepair', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiverepairRoutingModule { }
