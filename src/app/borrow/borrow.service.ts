import { BorrowModule } from './borrow.module';
import { url, stockurl } from './../config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: BorrowModule
})
export class BorrowService {

  constructor(
    private http: HttpClient
  ) { }
  getData() {
    let params = new HttpParams().set('action', 'getData');
    return this.http.get(`${url}/borrow.php`, {params: params});
  }

  getEquip(doc_no: any) {
    let params = new HttpParams().set('action','getEquip').set('doc_no',doc_no);
    // params.append('action', 'getEquip');
    // params.append('doc_no', doc_no);
    return this.http.get(`${url}/borrow.php`, { params: params });
  }
  sendback(data: any) {

    let params = new HttpParams()
      .set('action', 'return')
      .set('doc_no', data.doc_no)
      .set('stock_id', data.stock_id)
      .set('draw_emp', data.draw_emp)
      .set('symptom', data.symptom)
      .set('sysno', data.sysno)
      .set('pno', data.pno)
      .set('sno', data.sno)
      .set('nsno', data.nsno)
      .set('tagno', data.tagno)
      .set('typeid', data.typeid);
    return this.http.get(`${stockurl}/spare/apply_spare.php`, { params: params });
  }
  cktag(tagno) {
    let params = new HttpParams()
      .set('action', 'cktag')
      .set('tag_no', tagno);
    return this.http.get(`${stockurl}/spare/apply_spare.php`, { params: params });
  }
}
