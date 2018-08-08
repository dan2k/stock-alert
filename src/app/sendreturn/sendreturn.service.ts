import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../config';

@Injectable({
  providedIn: 'root'
})
export class SendreturnService {

  constructor(
    private http: HttpClient
  ) { }
  getData() {
    let params = new HttpParams()
      .set('action', 'getData');
    return this.http.get(`${url}/sendreturn.php`, { params: params });
  }
  getSendreturn(transfer_docno: any) {
    let params = new HttpParams()
      .set('action', 'sendrepair')
      .set('transfer_docno', transfer_docno);
    return this.http.get(`${url}/sendreturn.php`, { params: params });
  }
  save(formData: any) {
    // let params = new HttpParams();

    return this.http.post(`${url}/sendreturn.php`, formData);
  }
}
