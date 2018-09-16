import { Component, OnInit } from '@angular/core';
import { SendrepairService } from '../sendrepair.service';
import { ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sendrepair',
  templateUrl: './sendrepair.component.html',
  styleUrls: ['./sendrepair.component.scss']
})
export class SendrepairComponent implements OnInit {
  data: any;
  constructor(
    private sendrepairService: SendrepairService,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    let toastref = this.toast.info('กำลังประมวลผลข้อมูล', null, { disableTimeOut: true });
    this.sendrepairService.getData().subscribe((data: any) => {
      if (data.status) {
        console.log(data.data);
        this.toast.clear(toastref.toastId);
        this.toast.success('ดึงข้อมูลเรียบร้อยแล้ว', null, { timeOut: 2000 });
        this.data = data.data;
        if (this.data.length < 1) {
          this.router.navigate(['']);
        }
      } else {
        console.log(data);
        this.toast.clear(toastref.toastId);
        this.toast.error(data.msg, null, { timeOut: 2000 });
      }
    });
  }
  detail(data) {
    console.log(data);
    this.router.navigate(['sendrepair/detail', data.transfer_docno]);
  }

}
