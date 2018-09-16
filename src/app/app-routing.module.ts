import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  {
    path: "listalert",
    loadChildren: "./list-alert/list-alert.module#ListAlertModule"
  },
  {
    path: "setspare",
    loadChildren: "./set-spare/set-spare.module#SetSpareModule"
  },
  {
    path: "receiverepair",
    loadChildren: "./receiverepair/receiverepair.module#ReceiverepairModule"
  },
  { path: "borrow", loadChildren: "./borrow/borrow.module#BorrowModule" },
  {
    path: "sendrepair",
    loadChildren: "./sendrepair/sendrepair.module#SendrepairModule"
  },
  {
    path: "sendreturn",
    loadChildren: "./sendreturn/sendreturn.module#SendreturnModule"
  },
  {
    path: "sendreturn-but-no-receive",
    loadChildren:
      "./sendreturn-but-no-receive/sendreturn-but-no-receive.module#SendreturnButNoReceiveModule"
  },
  { path: "**", redirectTo: "listalert", pathMatch: "full" },
  { path: "", redirectTo: "listalert", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
