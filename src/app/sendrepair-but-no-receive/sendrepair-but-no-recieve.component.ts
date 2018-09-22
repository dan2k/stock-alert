import { SendrepairButNoRecieveService } from './sendrepair-but-no-recieve.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
// import * as $ from "jquery";
declare var $: any;
@Component({
  selector: 'app-sendrepair-but-no-recieve',
  templateUrl: './sendrepair-but-no-recieve.component.html',
  styleUrls: ['./sendrepair-but-no-recieve.component.scss']
})
export class SendrepairButNoRecieveComponent implements OnInit {
  data: any = [];
  docno: any;
  pno: any;
  sno: any;
  tagno: any;
  fromstockid: any;
  priority: number = 0;
  sendmail_seq: any;
  sendmail_priority: any;
  constructor(
    private rout: Router,
    private router: ActivatedRoute,
    private sendrepairButNoReceiveService: SendrepairButNoRecieveService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    let toastref = this.toast.info('กำลังประมวลผล...', null, { disableTimeOut: true });
    this.sendrepairButNoReceiveService.getData().subscribe((data: any) => {
      this.toast.clear(toastref.toastId);
      if (data.status) {
        this.toast.success('ดึงข้อมูลเรียบร้อยแล้ว', null, { timeOut: 2000 });
        this.data = data.data;
        if (this.data.length < 1) {
          this.rout.navigate(['']);
        }
      } else {
        this.toast.error(data.msg, null, { disableTimeOut: true });
        console.log(data.msg);
      }
    });
  }
  setPriority(p: number) {
    this.priority = p;
  }
  openAlert(data: any) {
    this.docno = data.doc_no;
    this.pno = data.pno;
    this.sno = data.sno;
    this.tagno = data.tag_no;
    this.sendmail_seq = data.sendmail_seq;
    this.sendmail_priority = data.sendmail_priority;
    let sendmail_date:any = this.date_diff_indays(data.sendmail_datetime, data.datetime_now);
    if ( parseInt(sendmail_date)<10 && data.sendmail_seq!=='0') {
      alert('คุณส่งเมล์แจ้งเตือนครั้งที่ '+data.sendmail_seq+' ไปแล้วเป็นเวลา '+sendmail_date+' วัน '+'\n\r'+' คุณต้องรออีก'+(10-parseInt(sendmail_date))+' วันจึงจะสามารถส่งเมล์ใหม่ได้');
      return false;
    }
    if (this.sendmail_seq < 1) {
      $('#alert').modal('show');
    } else {
      this.sendmail();
    }
  }
  sendmail() {
    $('#alert').modal('hide');
    if (this.sendmail_seq > 0) {
      this.priority = this.sendmail_priority;
    }
    let sendmail_seq = parseInt(this.sendmail_seq) + 1;
    let toastref = this.toast.info('กำลังส่งเมล์...', null, { disableTimeOut: true });
    this.sendrepairButNoReceiveService.sendmail(this.docno,this.pno,this.sno,this.tagno,this.priority,sendmail_seq).subscribe((data: any) => {
      console.log(data);
      this.toast.clear(toastref.toastId);
      if (data == '0') {
        this.toast.success('ส่งเมล์เรียบร้อยแล้ว', null, { timeOut: 2000 });
        this.getData();
      } else {
        this.toast.error(data, null, { disableTimeOut: true });
      }
     });
  }
  date_diff_indays(date1:any , date2:any) {
		let dt1 = new Date(date1);
		let dt2 = new Date(date2);
		return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
	}
}
