import { SendrepairButNoRecieveComponent } from './sendrepair-but-no-recieve.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'main', component: SendrepairButNoRecieveComponent
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'main', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendrepairButNoReceiveRoutingModule { }
