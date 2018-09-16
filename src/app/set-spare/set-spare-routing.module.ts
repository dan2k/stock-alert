import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SetSpareComponent } from "./set-spare.component";

const routes: Routes = [
  { path: "list", component: SetSpareComponent },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  { path: "**", redirectTo: "list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetSpareRoutingModule {}
