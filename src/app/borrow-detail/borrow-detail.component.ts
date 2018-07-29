import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BorrowService } from '../borrow/borrow.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-borrow-detail',
  templateUrl: './borrow-detail.component.html',
  styleUrls: ['./borrow-detail.component.scss']
})
export class BorrowDetailComponent implements OnInit {
  equip: any;
  detail: any;
  constructor(
    private router: ActivatedRoute,
    private rout: Router,
    private borrowService: BorrowService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.router.params.subscribe((params: any) => {
      console.log(params);
      this.detail = params;
      this.getEquip();
    });
  }
  getEquip() {
    let toastref = this.toast.info('กำลังประมวลผลข้อมูล', null, { disableTimeOut: true });
    this.borrowService.getEquip(this.detail['docno']).subscribe((data: any) => {
      if (data.status) {
        this.equip = data.data;
        this.toast.clear(toastref.toastId);
        this.toast.success('ดึงข้อมูลเรียบร้อยแล้ว', null, { timeOut: 3000 });
      } else {
        console.log(data.msg);
        this.toast.clear(toastref.toastId);
        this.toast.error(data.msg, null, { timeOut: 3000 });
      }
    });
  }
  async sendback(data: any, type: any, tagno: any, nsno: any, symptom: any) {
    if (!confirm('คุณต้องการส่งคืนหรือไม่')) {
      return false;
    }
    if (type.value === '2') {
      if (nsno.value.trim() === '') {
        alert('กรุณาระบุ serial อุปกรณ์ใหม่');
        nsno.focus();
        return false;
      }
    }
    if (type.value === '3') {
      if (tagno.value.trim() === '') {
        alert('กรุณาระบุ tagno อุปกรณ์เสีย');
        tagno.focus();
        return false;
      }
      if (symptom.value.trim() === '') {
        alert('กรุณาระบุ อาการเสีย อุปกรณ์เสีย');
        symptom.focus();
        return false;
      }
      let cktag = '0';
      let toastref = this.toast.info('กำลังตรวจสอบ tag no', null, { disableTimeOut: true });
      await this.borrowService.cktag(tagno.trim()).toPromise().then((d: any) => {
        this.toast.clear(toastref.toastId);
        this.toast.success('ตรวจสอบเรียบร้อยแล้ว', null, { timeOut: 2000 });
        console.log('1.cktag===>', d);
        cktag = d;
      });
      console.log('2.ck==>', cktag);
      if (cktag.toString() === '1') {
        alert('พบ tag no นี้ในระบบแล้วกรุณาระบุใหม่');
        return false;
      }
    }
     let params = {
      doc_no: data.doc_no,
      stock_id: this.detail['stockid'],
      draw_emp: this.detail['empid'],
      symptom: symptom,
      sysno: data.sys_no,
      pno: data.pno,
      sno: data.sno,
      nsno: nsno,
      tagno: tagno,
      typeid: type
     };
     let toastref2 = this.toast.info('กำลังประมวลผลข้อมูล', null, { disableTimeOut: true });
    this.borrowService.sendback(params).subscribe((d: any) => {
      let dd = '';
      dd = d;
      if (dd.toString() === '0') {
        alert('ส่งคืนเรียบร้อยแล้ว');
        this.toast.clear(toastref2.toastId);
        // this.toast.success('ส่งคืนเรียบร้อยแล้ว', null, { timeOut: 3000 });
        this.equip = this.equip.filter(obj => obj !== data);
        if (this.equip.length < 1) {
          this.rout.navigate(['borrow']);
        }
      } else {
        alert(dd.toString());
        this.toast.clear(toastref2.toastId);
        // this.toast.success('ส่งคืนเรียบร้อยแล้ว', null, { timeOut: 3000 });
      }
    });

  }
  setObj(typeid, tagno, nsno, symptom, event) {
    if (typeid === '1') {
      tagno.disabled = true;
      tagno.value = '';
      nsno.disabled = true;
      nsno.value = '';
      symptom.disabled = true;
      symptom.value = '';
    }
    if (typeid === '2') {
      tagno.disabled = true;
      tagno.value = '';
      nsno.disabled = false;
      nsno.value = '';
      symptom.disabled = true;
      symptom.value = '';
    }
    if (typeid === '3') {
      tagno.disabled = false;
      tagno.value = '';
      nsno.disabled = true;
      nsno.value = '';
      symptom.disabled = false;
      symptom.value = '';
    }
  }
}
