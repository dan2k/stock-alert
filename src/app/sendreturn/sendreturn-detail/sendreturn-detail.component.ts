import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { SendreturnService } from "../sendreturn.service";
import { IOption } from "ng-select";
class MIOption implements IOption {
  value: string;
  label: string;
  pay_flag: string;
}
@Component({
  selector: "app-sendreturn-detail",
  templateUrl: "./sendreturn-detail.component.html",
  styleUrls: ["./sendreturn-detail.component.scss"]
})
export class SendreturnDetailComponent implements OnInit{
  transfer_docno: any;
  repairs: any;
  detail: any;
  imgUrl: any = "";
  pdfUrl: any = "";
  contract: string='';
  myOptions: Array<MIOption>;
  myOption2: Array<MIOption>;
  companyid: string='';
  price: any;
  pay_flag: any;
  constructor(
    private sendreturnService: SendreturnService,
    private router: ActivatedRoute,
    private toast: ToastrService,
    private rout: Router
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.transfer_docno = params["transfer_docno"];
      this.getCompany();
      this.getContract();
      this.getSendreturn();
    });
  }
  setComid(option:MIOption) {
    this.companyid = option.value;
    this.pay_flag = option.pay_flag;
    console.log('companyid=' + this.companyid);
  }
  setContract(option: IOption) {
    this.contract = option.value;
    console.log('contract=' + this.contract);
  }
  getContract() {
    let toastref = this.toast.info("กำลังประมวลผลข้อมูล", null, {
      disableTimeOut: true
    });
    this.sendreturnService.getContract().subscribe((data: any) => {
      this.toast.clear(toastref.toastId);
      if (data.status) {
        this.toast.success("ดึงข้อมูลเรียบร้อยแล้ว", null, { timeOut: 2000 });
        console.log(data.data);
        this.myOptions = data.data;
      } else {
        console.log(data);
        this.toast.error(data.msg, null, { timeOut: 2000 });
      }
    });
  }
  getCompany() {
    let toastref = this.toast.info("กำลังประมวลผลข้อมูล", null, {
      disableTimeOut: true
    });
    this.sendreturnService.getCompany().subscribe((data: any) => {
      this.toast.clear(toastref.toastId);
      if (data.status) {
        this.toast.success("ดึงข้อมูลเรียบร้อยแล้ว", null, { timeOut: 2000 });
        console.log(data.data);
        this.myOption2 = data.data;
      } else {
        console.log(data);
        this.toast.error(data.msg, null, { timeOut: 2000 });
      }
    });
  }
  getSendreturn() {
    let toastref = this.toast.info("กำลังประมวลผลข้อมูล", null, {
      disableTimeOut: true
    });
    this.sendreturnService
      .getSendreturn(this.transfer_docno)
      .subscribe((data: any) => {
        this.toast.clear(toastref.toastId);
        if (data.status) {
          this.toast.success("ดึงข้อมูลเรียบร้อยแล้ว", null, { timeOut: 2000 });
          if (data.detail.length < 1) {
            this.rout.navigate(["sendreturn/list"]);
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
        this.imgUrl = "";
        // return false;
        isImg = false;
      } else {
        isImg = true;
      }
      if (!event.target.files[0].type.match(patternPdf)) {
        // this.toast.error('ไม่ใช่รูปภาพกรุณา upload รูปภาพเท่านั้น', null, { timeOut: 3000 });
        this.pdfUrl = "";
        // return false;
        isPdf = false;
      } else {
        isPdf = true;
      }
      if (isImg == false && isPdf == false) {
        this.toast.error(
          "ไม่ใช่รูปภาพกรุณา upload รูปภาพหรือ pdf เท่านั้น",
          null,
          { timeOut: 3000 }
        );
        return false;
      }
      let reader = new FileReader();
      reader.onload = (event2: any) => {
        if (isImg) {
          this.imgUrl = event2.target.result;
          this.pdfUrl = "";
          console.log(this.imgUrl);
        } else {
          this.pdfUrl = event2.target.result;
          this.imgUrl = "";
          console.log(this.pdfUrl);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  save(
    transferdesc: any,
    transfernumber: any,
    transfertel: any,
    transferpic: any,
    comid: any,
    transfercontract: any,
    transferprice: any,
    transferremark:any
  ) {
    console.log(transferpic.files[0]);
    if (this.companyid === "") {
      alert('กรุณาเลือกช่องทางการส่ง');
      comid.select('');
      return false;
    }
    if (transferdesc.value === "" && this.companyid==="99") {
      alert("กรุณาระบุ รายละเอียดการส่ง");
      transferdesc.focus();
      return false;
    }
    console.log(this.price);
    if ((this.price === 0 || this.price===undefined) && this.pay_flag === "1"  ) {
      alert("กรุณาระบุ ราคา");
      transferprice.focus();
      return false;
    }
    if (transfernumber.value === "" ) {
      alert("กรุณาระบุ หมายเลขเอกสารการส่ง");
      transfernumber.focus();
      return false;
    }
    if (this.contract === "") {
      alert("กรุณาระบุ contract no");
      transfercontract.select('');
      return false;
    }


    if (this.imgUrl === "" && this.pdfUrl === "" && this.companyid!=='99') {
      alert("กรุณาupload เอกสาร");
      return false;
    }

    if ((this.imgUrl !== "" || this.pdfUrl !== "") && this.companyid!=='99' ) {
      let patternImg = /image\/*/;
      let patternPdf = /application\/pdf/;
      if (this.imgUrl !== "") {
        if (!transferpic.files[0].type.match(patternImg)) {
          alert("ไม่ใช่ file รูปภาพ");
          return false;
        }
      } else {
        if (!transferpic.files[0].type.match(patternPdf)) {
          alert("ไม่ใช่ Pdf รูปภาพ");
          return false;
        }
      }
    }
    // return false;
    let formData = new FormData();
    formData.append("action", "save");
    formData.append("transfer_docno", this.transfer_docno);
    formData.append("transferdesc", this.companyid==='99'?'':transferdesc.value);
    formData.append("transfernumber", transfernumber.value);
    formData.append("transfertel", transfertel.value);
    formData.append("transferpic", transferpic.files[0]);
    formData.append("comid", this.companyid);
    formData.append("transferprice",this.price);
    formData.append("transfercontract", this.contract);
    formData.append("transferremark", transferremark.value);
    let toastref = this.toast.info("กำลังประมวลผล", null, {
      disableTimeOut: true
    });
    this.sendreturnService.save(formData).subscribe((data: any) => {
      this.toast.clear(toastref.toastId);
      if (data.status) {
        this.toast.success("บันทึกข้อมูลเรียบร้อยแล้ว", null, {
          timeOut: 2000
        });
        this.rout.navigate(["sendreturn/list"]);
      } else {
        console.log(data);
        this.toast.error(data.mesg, null, { timeOut: 2000 });
      }
    });
  }
  cancel(
    transferdesc: any,
    transfernumber: any,
    transfertel: any,
    transferpic: any,
    comid: any,
    transfercontract: any,
    transferprice: any,
    transferremark:any
  ) {
    transferdesc.value = "";
    transfernumber.value = "";
    transfertel.value = "";
    transferpic.value = "";
    this.imgUrl = "";
    this.pdfUrl = "";
    this.companyid = "";
    this.contract = "";
    comid.clear();
    this.price = '';
    transfercontract.clear();
    transferprice.value = '';
    transferremark.value = '';
  }
}
