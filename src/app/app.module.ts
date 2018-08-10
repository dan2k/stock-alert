import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAlertComponent } from './list-alert/list-alert.component';
import { BorrowComponent } from './borrow/borrow.component';
import { SetSpareComponent } from './set-spare/set-spare.component';
import { BorrowDetailComponent } from './borrow-detail/borrow-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SendrepairComponent } from './sendrepair/sendrepair.component';
import { SendrepairDetailComponent } from './sendrepair-detail/sendrepair-detail.component';
import { SendreturnComponent } from './sendreturn/sendreturn.component';
import { SendreturnDetailComponent } from './sendreturn-detail/sendreturn-detail.component';
import { ReceiverepairComponent } from './receiverepair/receiverepair.component';
import { SendreturnButNoReceiveComponent } from './sendreturn-but-no-receive/sendreturn-but-no-receive.component';


@NgModule({
  declarations: [
    AppComponent,
    ListAlertComponent,
    BorrowComponent,
    SetSpareComponent,
    BorrowDetailComponent,
    NavbarComponent,
    SendrepairComponent,
    SendrepairDetailComponent,
    SendreturnComponent,
    SendreturnDetailComponent,
    ReceiverepairComponent,
    SendreturnButNoReceiveComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
