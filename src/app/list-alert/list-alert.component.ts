import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-alert',
  templateUrl: './list-alert.component.html',
  styleUrls: ['./list-alert.component.scss']
})
export class ListAlertComponent implements OnInit {
  list: any;
  constructor(private alertService: AlertService, private router: Router, private toast: ToastrService) { }

  ngOnInit() {
    // let ip : string = location.host;
    // console.log(ip);
    let toastref=this.toast.info('กำลังประมวลผล', null, {
      disableTimeOut:true
    });
    this.alertService.get('listalert.php').subscribe((data: any) => {
      console.log(data);
      this.toast.clear(toastref.toastId);
      this.toast.success('ดึงข้อมูลเรียบร้อยแล้ว', null, {
        timeOut:3000
      });
      if (data.length < 1) {
        window.close();
      }
      this.list = data;
    });
  }
  goto(list: any) {
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     data: JSON.stringify(list.data)
    //   }
    // };
    let r: any;
    switch (parseInt(list.type)) {
      case 1: r = 'borrow'; break; // เบิกยืม
      case 2: r = 'setspare'; break; // จัด set
      case 3: r = 'sendrepair'; break; // บันทึกเอกสารส่งซ่อม
    }
    console.log(r);
    // this.router.navigate([r], navigationExtras);
    this.router.navigate([r]);
  }
}
