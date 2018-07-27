import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BorrowService } from './borrow.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss']
})
export class BorrowComponent implements OnInit {
  data: any;
  constructor(
    private router: ActivatedRoute,
    private borrowService: BorrowService,
    private toast: ToastrService,
    private rout: Router) { }

  ngOnInit() {
    /*this.router.queryParams.subscribe((params: any) => {
      this.data = JSON.parse(params['data']);
      console.log('q===>', this.data);

    });
    */
    this.getData();
  }
  getData() {
    let toastref: any = this.toast.info('กำลังประมวลผลข้อมูล', null, { disableTimeOut: true });
    this.borrowService.getData().subscribe((data: any) => {
      console.log(data);
      if (data.status) {
        this.toast.clear(toastref.toastId);
        this.toast.success('ดึงข้อมูลเรียบร้อยแล้ว', null, { timeOut: 3000 });
        this.data = data.data;
        if (this.data.length < 1) {
          this.rout.navigate(['']);
        }
      } else {
        this.toast.clear(toastref.toastId);
        this.toast.error(data.msg, null, { timeOut: 3000 });
      }
    });
  }
  detail(data: any) {
    this.rout.navigate([
      'borrowdetail',
      data.doc_no,
      data.stock_id,
      data.draw_emp,
      data.remark,
      data.thiname,
      data.objectivex,
      data.draw_date1,
      data.return_expect1
    ]);
  }

}
