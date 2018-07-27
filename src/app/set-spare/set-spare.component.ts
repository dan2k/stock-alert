import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SetspareService } from '../setspare.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-set-spare',
  templateUrl: './set-spare.component.html',
  styleUrls: ['./set-spare.component.scss']
})
export class SetSpareComponent implements OnInit {
  data: any;
  cabinet: any;
  shelf: any;
  channel: any;
  box: any;

  constructor(
    private rout: Router,
    private router: ActivatedRoute,
    private setspareService: SetspareService,
    private toast: ToastrService) { }
  async ngOnInit() {
    /*this.router.queryParams.subscribe((params: any) => {
      this.data = JSON.parse(params['data']);
    });
    */
    let toastref = this.toast.info('กำลังประมวลผลข้อมูล', null, { disableTimeOut: true });
    await this.setspareService.getData().toPromise().then((data: any) => {
      console.log('data==>', data.data);
      if (data.status) {
        if (data.data.length < 1) {
          this.rout.navigate(['']);
        } else {
          console.log(data.data);
          this.data = data.data;
        }

      }else{
        alert('พบข้อผิดพลาด');
        console.log(data);
      }
    });
    await this.setspareService.getCabinet().toPromise().then((data: any) => {
      console.log('cabinet==>', data);
      this.cabinet = data;
    });
    await this.setspareService.getShelf().toPromise().then((data: any) => {
      console.log('shelf==>', data);
      this.shelf = data;
    });
    await this.setspareService.getChannel().toPromise().then((data: any) => {
      console.log('channel==>', data);
      this.channel = data;
    });
    await this.setspareService.getBox().toPromise().then((data: any) => {
      console.log('box==>', data);
      this.box = data;
    });
    console.log('process is complet !!!!!!!!!!!!!');
    this.toast.clear(toastref.toastId);
    this.toast.success('ดึงข้อมูลเรียบร้อยแล้ว', null, { timeOut: 3000 });
  }

  save(data, cabinet, shelf, channel, box) {
    if (!confirm('ต้องการบันทึกข้อมูลหรือไม่')) {
      return false;
    }
    let params = {
      sno: data.sno,
      pno: data.pno,
      stockid: data.stock_id,
      cabinet: cabinet,
      shelf: shelf,
      channel: channel,
      box: box,
      action: 'setspare'
    };
    this.setspareService.save(params).subscribe((d: any) => {
      if (d.status) {
        alert('จัดอุปกรณ์เรียบร้อยแล้ว');
        console.log(d);
        this.data = this.data.filter(obj => obj !== data);
        if (this.data.length < 1) {
          this.rout.navigate(['']);
        }
      } else {
        alert('เกิดข้อผิดพลาดขึ้น');
        console.log(d);
      }
    });
  }

}
