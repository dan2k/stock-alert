import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListAlertComponent } from "./list-alert.component";

const routes: Routes = [
  {
    path: "list",
    component: ListAlertComponent
  },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", redirectTo: "list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAlertRoutingModule {}
