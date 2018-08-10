import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url,stockurl,stockdevurl,stockdevhome, stockhome } from '../config';
@Injectable({
  providedIn: 'root'
})
export class SendreturnButNoReceiveService {
  stockhome: string = stockdevhome;
  // stockhome: string = stockdhome;
  constructor(
    private http: HttpClient
  ) { }
  getData() {
    let params = new HttpParams()
      .set('action', 'getData');
    return this.http.get(`${url}/sendreturn-but-no-receive.php`, { params: params });
  }
  sendmail(ret_docno: string) {
    let params = new HttpParams()
      .set('action', 'alert-sendreturn-but-no-receive')
      .set('ret_docno', ret_docno);
    return this.http.get(`${this.stockhome}/ajax/sendmail/sendmail.php`, { params: params });
  }
}
