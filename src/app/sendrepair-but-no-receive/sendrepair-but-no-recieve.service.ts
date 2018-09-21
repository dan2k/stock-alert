import { Injectable } from '@angular/core';
import { url, stockhome } from '../config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SendrepairButNoReceiveModule } from './sendrepair-but-no-receive.module';
@Injectable({
  providedIn: SendrepairButNoReceiveModule
})
export class SendrepairButNoRecieveService {
  stockhome: string = stockhome;
  constructor(
    private http: HttpClient
  ) { }
  getData() {
    let params = new HttpParams()
      .set('action', 'getData');
    return this.http.get(`${url}/sendrepair-but-no-receive.php`, { params: params });
  }
  sendmail(docno: string, pno: any, sno: any, tagno: any, priority: any,sendmail_seq: any) {
    let params = new HttpParams()
      .set('action', 'alert-sendrepair-but-no-receive')
      .set('docno', docno)
      .set('pno', pno)
      .set('sno', sno)
      .set('tagno',tagno)
      .set('priority', priority)
      .set('sendmail_seq',sendmail_seq);
    return this.http.get(`${this.stockhome}/ajax/sendmail/sendmail.php`, { params: params });
  }
}
