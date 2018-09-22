import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url, stockhome } from '../config';
import { SendreturnButNoReceiveModule } from './sendreturn-but-no-receive.module';
@Injectable({
  providedIn: SendreturnButNoReceiveModule
})
export class SendreturnButNoReceiveService {
  // stockhome: string = stockdevhome;
  stockhome: string = stockhome;
  constructor(
    private http: HttpClient
  ) { }
  getData(from_stock_id: any) {
    let params = new HttpParams()
      .set('action', 'getData')
      .set('from_stock_id', from_stock_id);
    return this.http.get(`${url}/sendreturn-but-no-receive.php`, { params: params });
  }
  getGroup() {
    let params = new HttpParams()
      .set('action', 'getGroup');
    return this.http.get(`${url}/sendreturn-but-no-receive.php`, { params: params });
  }
  sendmail(ret_docno: string) {
    let params = new HttpParams()
      .set('action', 'alert-sendreturn-but-no-receive')
      .set('ret_docno', ret_docno);
    return this.http.get(`${this.stockhome}/ajax/sendmail/sendmail.php`, { params: params });
  }
}
