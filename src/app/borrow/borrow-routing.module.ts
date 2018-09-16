import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BorrowComponent } from "./borrow/borrow.component";
import { BorrowDetailComponent } from "./borrow-detail/borrow-detail.component";

const routes: Routes = [
  { path: "list", component: BorrowComponent },
  {
    path:
      "detail/:docno/:stockid/:empid/:remark/:thiname/:object/:draw_date/:return_expect",
    component: BorrowDetailComponent
  },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", redirectTo: "list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowRoutingModule {}
