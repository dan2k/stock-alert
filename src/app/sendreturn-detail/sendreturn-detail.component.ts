import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SendreturnService } from '../sendreturn/sendreturn.service';
@Component({
  selector: 'app-sendreturn-detail',
  templateUrl: './sendreturn-detail.component.html',
  styleUrls: ['./sendreturn-detail.component.scss']
})
export class SendreturnDetailComponent implements OnInit {
  transfer_docno: any;
  repairs: any;
  detail: any;
  imgUrl: any = '';
  pdfUrl: any = '';
  constructor(
    private sendreturnService: SendreturnService,
    private router: ActivatedRoute,
    private toast: ToastrService,
    private rout: Router
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
    this.transfer_docno = params['transfer_docno'];
    this.getSendreturn();
    });
  }
  getSendreturn() {
    let toastref = this.toast.info('กำลังประมวลผลข้อมูล', null, { disableTimeOut: true });
    this.sendreturnService.getSendreturn(this.transfer_docno).subscribe((data: any) => {
      this.toast.clear(toastref.toastId);
      if (data.status) {
        this.toast.success('ดึงข้อมูลเรียบร้อยแล้ว', null, { timeOut: 2000 });
        if (data.detail.length < 1) {
          this.rout.navigate(['']);
        }
        this.repairs = data.data;
        this.detail = data.detail[0];
      } else {
        console.log(data);
        this.toast.error(data.msg, null, { timeOut: 2000 });
      }
    });
  }
  setImg(event) {
    // console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      let isPdf: boolean;
      let isImg: boolean;
      let patternImg = /image\/*/;
      let patternPdf = /application\/pdf/;
      if (!event.target.files[0].type.match(patternImg)) {
        // this.toast.error('ไม่ใช่รูปภาพกรุณา upload รูปภาพเท่านั้น', null, { timeOut: 3000 });
         this.imgUrl = '';
        // return false;
        isImg = false;
      } else {
        isImg = true;
      }
      if (!event.target.files[0].type.match(patternPdf)) {
        // this.toast.error('ไม่ใช่รูปภาพกรุณา upload รูปภาพเท่านั้น', null, { timeOut: 3000 });
         this.pdfUrl = '';
        // return false;
        isPdf = false;
      } else {
        isPdf = true;
      }
      if (isImg==false && isPdf==false) {
        this.toast.error('ไม่ใช่รูปภาพกรุณา upload รูปภาพหรือ pdf เท่านั้น', null, { timeOut: 3000 });
        return false;
      }
      let reader = new FileReader();
      reader.onload = (event2: any) => {
        if (isImg) {
          this.imgUrl = event2.target.result;
          this.pdfUrl = '';
          console.log(this.imgUrl);
        } else {
          this.pdfUrl = event2.target.result;
          this.imgUrl = '';
          console.log(this.pdfUrl);
        }

      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  save(transferdesc: any, transfernumber: any, transfertel: any, transferpic: any) {
    console.log(transferpic.files[0]);
    if (transferdesc.value === '') {
      alert('กรุณาระบุ รายละเอียดการส่ง');
      transferdesc.focus();
      return false;
    }
    if (transfernumber.value === '') {
      alert('กรุณาระบุ หมายเลขเอกสารการส่ง');
      transfernumber.focus();
      return false;
    }
    if (this.imgUrl === '' && this.pdfUrl==='') {
      alert('กรุณาupload เอกสาร');
      return false;
    }

    if (this.imgUrl !== '' || this.pdfUrl!=='') {
      let patternImg = /image\/*/;
      let patternPdf = /application\/pdf/;
      if (this.imgUrl !== '') {
        if (!transferpic.files[0].type.match(patternImg)) {
          alert('ไม่ใช่ file รูปภาพ');
          return false;
        }
      } else {
        if (!transferpic.files[0].type.match(patternPdf)) {
          alert('ไม่ใช่ Pdf รูปภาพ');
          return false;
        }
      }
    }
    let formData = new FormData();
    formData.append('action', 'save');
    formData.append('transfer_docno', this.transfer_docno);
    formData.append('transferdesc', transferdesc.value);
    formData.append('transfernumber', transfernumber.value);
    formData.append('transfertel', transfertel.value);
    formData.append('transferpic', transferpic.files[0]);
    let toastref = this.toast.info('กำลังประมวลผล', null, { disableTimeOut: true });
    this.sendreturnService.save(formData).subscribe((data: any) => {
      this.toast.clear(toastref.toastId);
      if (data.status) {
        this.toast.success('บันทึกข้อมูลเรียบร้อยแล้ว', null, { timeOut: 2000 });
        this.rout.navigate(['']);
      } else {
        console.log(data);
        this.toast.error(data.mesg, null, { timeOut: 2000 });
      }
    });
  }
  cancel(transferdesc: any, transfernumber: any, transfertel: any, transferpic: any) {
    transferdesc.value = '';
    transfernumber.value = '';
    transfertel.value = '';
    transferpic.value = '';
    this.imgUrl = '';
    this.pdfUrl = '';


  }
}
