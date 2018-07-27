import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {url} from '../app/config';
@Injectable({
  providedIn: 'root'
})
export class SetspareService {
  //url: any = 'http://www.controldata.co.th/mpsicc/iccServer/stock-alert';
  // url: any = '/stock-alert';
  constructor(private http: HttpClient) { }
  getCabinet() {
    let params = new HttpParams().set('action', 'getCabinet');
    return this.http.get(`${url}/setspare.php`, { params: params });
  }
  getShelf() {
    let params = new HttpParams().set('action', 'getShelf');
    return this.http.get(`${url}/setspare.php`, { params: params });
  }
  getChannel() {
    let params = new HttpParams().set('action', 'getChannel');
    return this.http.get(`${url}/setspare.php`, { params: params });
  }
  getBox() {
    let params = new HttpParams().set('action', 'getBox');
    return this.http.get(`${url}/setspare.php`, { params: params });
  }
  getData() {
    let params = new HttpParams().set('action', 'getData');
    return this.http.get(`${url}/setspare.php`, { params: params });
  }
  save(params) {
    return this.http.post(`${url}/setspare.php`, params);
  }
}
