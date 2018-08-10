import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { SendreturnButNoReceiveService } from './sendreturn-but-no-receive.service';

@Component({
  selector: 'app-sendreturn-but-no-receive',
  templateUrl: './sendreturn-but-no-receive.component.html',
  styleUrls: ['./sendreturn-but-no-receive.component.scss']
})
export class SendreturnButNoReceiveComponent implements OnInit {
  data: any=[];
  group: any=[];
  isData: boolean = false;
  constructor(
    private rout: Router,
    private router: ActivatedRoute,
    private sendreturnButNoReceiveService: SendreturnButNoReceiveService ,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.getGroup();
  }
  getGroup() {
    let toastref = this.toast.info('กำลังประมวลผล....', null, { disableTimeOut: true });
    this.sendreturnButNoReceiveService.getGroup().subscribe((data: any) => {
      this.toast.clear(toastref.toastId);
      if (data.status) {
        this.group = data.data;
        if (this.group.length < 2) {
          this.getData(this.group[0].from_stock_id);
        } else {
          this.toast.success('ดึงข้อมูลเรียบร้อยแล้ว', null, { timeOut: 2000 });
        }
      } else {
        this.toast.error(data.msg, null, { disableTimeOut: true });
        console.log(data.msg);
      }
    });
  }
  getData(from_stock_id: any) {
    if (from_stock_id == '') {
      this.data = [];
      this.isData = false;
      return false;
    }
    let toastref = this.toast.info('กำลังประมวลผล...', null, { disableTimeOut: true });
    this.sendreturnButNoReceiveService.getData(from_stock_id).subscribe((data: any) => {
      this.toast.clear(toastref.toastId);
      if (data.status) {
        this.toast.success('ดึงข้อมูลเรียบร้อยแล้ว', null, { timeOut: 2000 });
        this.data = data.data;
        this.isData = true;
        if (this.data.length < 1) {
          this.rout.navigate(['']);
        }
      } else {
        this.toast.error(data.msg, null, { disableTimeOut: true });
        console.log(data.msg);
      }
    });
  }
  sendmail(ret_docno: string) {
    let toastref = this.toast.info('กำลังส่งเมล์...', null, { disableTimeOut: true });
    this.sendreturnButNoReceiveService.sendmail(ret_docno).subscribe((data: any) => {
      console.log(data);
      this.toast.clear(toastref.toastId);
      if (data == '0') {
        this.toast.success('ส่งเมล์เรียบร้อยแล้ว', null, { timeOut: 2000 });
      } else {
        this.toast.error(data, null, { disableTimeOut: true });
      }
     });
  }
}
