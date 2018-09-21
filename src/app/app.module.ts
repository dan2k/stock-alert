import { SendreturnModule } from './sendreturn/sendreturn.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetSpareModule } from './set-spare/set-spare.module';
import { BorrowModule } from './borrow/borrow.module';
import { ListAlertModule } from './list-alert/list-alert.module';
import { ReceiverepairModule } from './receiverepair/receiverepair.module';
import { SendrepairModule } from './sendrepair/sendrepair.module';
import { SendreturnButNoReceiveModule } from './sendreturn-but-no-receive/sendreturn-but-no-receive.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SendrepairButNoReceiveModule } from './sendrepair-but-no-receive/sendrepair-but-no-receive.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SetSpareModule,
    BorrowModule,
    ListAlertModule,
    ReceiverepairModule,
    SendrepairModule,
    SendreturnModule,
    SendreturnButNoReceiveModule,
    SendrepairButNoReceiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
