 import { ListAlertService } from './list-alert.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-alert',
  templateUrl: './list-alert.component.html',
  styleUrls: ['./list-alert.component.scss']
})
export class ListAlertComponent implements OnInit {
  list: any;
  constructor(
    private alertService: ListAlertService,
    private router: Router,
    private toast: ToastrService
  ) {}
  ngOnInit() {
    // let ip : string = location.host;
    // console.log(ip);
    let toastref: any  = this.toast.info('กำลังประมวลผล', null, {
      disableTimeOut: true
    });
    this.alertService.get('listalert.php').subscribe((data: any) => {
      console.log(data);
      this.toast.clear(toastref.toastId);
      if (data.status) {
        this.toast.success('ดึงข้อมูลเรียบร้อยแล้ว', null, {
          timeOut: 3000
        });
        if (data.data.length < 1) {
          window.close();
        }
        this.list = data.data;
      } else {
        this.toast.error(data.msg, null, { disableTimeOut: true });
        console.log(data);
      }
    });
  }
  gotoPage(link: any) {
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     data: JSON.stringify(list.data)
    //   }
    // };
    // let r: any = '';
    // switch (type) {
    //   case 1:
    //     r = 'borrow';
    //     break; // เบิกยืม
    //   case 2:
    //     r = 'setspare';
    //     break; // จัด set
    //   case 3:
    //     r = 'sendrepair';
    //     break; // บันทึกเอกสารส่งซ่อม
    //   case 4:
    //     r = 'sendreturn';
    //     break; // บันทึกเอกสารส่งคืน
    //   case 5:
    //     r = 'receiverepair';
    //     break; // บันทึกรับคืนอุปกรณ์
    //   case 6:
    //     r = 'sendreturn-but-no-receive';
    //     break; // รายการอุปกรณ์ส่งคืนแต่ยังไม่ได้ทำการรับคืน
    //   case 7:
    //     r = 'sendrepair-but-no-receive';
    //     break; // รายการอุปกรณ์ส่งซ่อมที่ปลายทางยังไม่บันทึกรับซ่อม
    // }
    // console.log(r);
    // this.router.navigate([r], navigationExtras);
    this.router.navigate([link]);
  }
}
