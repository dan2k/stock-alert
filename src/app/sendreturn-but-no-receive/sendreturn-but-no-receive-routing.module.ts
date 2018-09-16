import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendreturnButNoReceiveComponent } from './sendreturn-but-no-receive.component';

const routes: Routes = [
  { path: 'main', component: SendreturnButNoReceiveComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendreturnButNoReceiveRoutingModule { }
