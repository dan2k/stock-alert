import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stockurl, stockhome } from '../config';
import { ReceiverepairModule } from './receiverepair.module';
@Injectable({
  providedIn: ReceiverepairModule
})
export class ReceiverepairService {
  // stockurl: string = stockdevurl;
  stockurl: string = stockurl;
  // stockhome: string = stockdevhome;
  stockhome: string = stockhome;
  constructor(
    private http: HttpClient
  ) { }
  getData() {
    //let params = new HttpParams()
     // .set('action', 'getData');
    return this.http.get(`${this.stockurl}/repair_receive/repair_receive.php`);
  }
  save(formData: any) {
    // let params = new HttpParams();
    return this.http.post(`${this.stockurl}/repair_receive/repair_receive.php`, formData);
  }
  openRetdocno(retdocno:any) {
    window.open(
      `${this.stockhome}/docret.php?ret_docno=${retdocno}`,
      "_blank"
    );
  }
}
