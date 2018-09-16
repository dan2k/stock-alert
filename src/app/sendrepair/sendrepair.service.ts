import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../config';
import { SendrepairModule } from './sendrepair.module';

@Injectable({
  providedIn: SendrepairModule
})
export class SendrepairService {

  constructor(
    private http: HttpClient
  ) { }
  getData() {
    let params = new HttpParams()
      .set('action', 'getData');
    return this.http.get(`${url}/sendrepair.php`, { params: params });
  }

  getSendrepair(transfer_docno: any) {
    let params = new HttpParams()
      .set('action', 'sendrepair')
      .set('transfer_docno', transfer_docno);
    return this.http.get(`${url}/sendrepair.php`, { params: params });
  }
  getContract() {
    let params = new HttpParams()
      .set('action', 'getContract');
    return this.http.get(`${url}/sendrepair.php`, { params: params });
  }
  getCompany() {
    let params = new HttpParams()
      .set('action', 'getCompany');
    return this.http.get(`${url}/sendrepair.php`, { params: params });
  }
  save(formData: any) {
    // let params = new HttpParams();

    return this.http.post(`${url}/sendrepair.php`, formData);
  }
}
