import { ListAlertModule } from './list-alert.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {url} from '../config';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: ListAlertModule
})
export class ListAlertService {
   // url: any = 'http://www.controldata.co.th/mpsicc/iccServer/stock-alert';
   // url: any = '/stock-alert';
  constructor(private http: HttpClient) {
    // xx
  }
  post(endpoint: any, params: any) {

    return this.http.post(`${url}/${endpoint}`, params , httpOptions);
  }
  get(endpoint: any) {
    return this.http.get(`${url}/${endpoint}`, httpOptions);
  }
}
