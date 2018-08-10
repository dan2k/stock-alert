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
  data: any;
  constructor(
    private rout: Router,
    private router: ActivatedRoute,
    private sendreturnButNoReceiveService: SendreturnButNoReceiveService ,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    let toastref = this.toast.info('กำลังประมวลผล...', null, { disableTimeOut: true });
    this.sendreturnButNoReceiveService.getData().subscribe((data: any) => {
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
