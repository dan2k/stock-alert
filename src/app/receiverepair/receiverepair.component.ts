import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ReceiverepairService } from "./receiverepair.service";

@Component({
  selector: "app-receiverepair",
  templateUrl: "./receiverepair.component.html",
  styleUrls: ["./receiverepair.component.scss"]
})
export class ReceiverepairComponent implements OnInit {
  data: any;
  constructor(
    private rout: Router,
    private router: ActivatedRoute,
    private receiverepairService: ReceiverepairService,
    private toast: ToastrService
  ) {}
  ngOnInit() {
    this.getData();
  }
  save(data0: any) {
    if (!confirm('คุณต้องการบันทึกรับคืนรายการนี้หรือไม่')) {
      return false;
    }
    let toastref = this.toast.info("กำลังบันทึกข้อมูล", null, {
      disableTimeOut: true
    });
    let formData = new FormData();
    formData.append("pno", data0.pno);
    formData.append("sno", data0.sno);
    formData.append("doc_no", data0.doc_no);
    formData.append("tag_no", data0.tag_no);
    formData.append("from_stockid", data0.dfrom_stockid);
    formData.append("ret_sno", data0.ret_sno);
    formData.append("ret_pno", data0.ret_pno);
    formData.append("province_name", data0.province_name);
    formData.append("adv_flag", data0.adv_flag);
    formData.append("rep_code", data0.rep_code);
    formData.append("cust_code", data0.cust_code);
    formData.append("action", "save");
    // console.log(location.host);
    // console.log(location.hostname);
    this.receiverepairService.save(formData).subscribe((data: any) => {
      this.toast.clear(toastref.toastId);
      this.toast.success("บันทึกข้อมูลเรียบร้อยแล้ว", null, { timeOut: 2000 });
      let msg: string = "";
      if (data[0].flag == 1) {
        msg = "บันทึกรับคืนเรียบร้อยแล้า\n";
      } else {
        msg = "บันทึกรับคืนเรียบร้อยแล้า\n";
        msg += "เลขที่เอกสารส่งคืน " + data[0].docno + "\n";
      }
      msg += "P/N: " + data[0].pno + "\n";
      msg += "S/N: " + data[0].sno + "\n";
      msg += "โปรดส่งคืน: " + data[0].place + "\n";
      alert(msg);
      this.data = this.data.filter(obj => obj !== data0);
      if (this.data.length < 1) {
        this.rout.navigate([""]);
      }
      if (data[0].flag == "0") {//เปิดเลขที่ใบส่งคืน
        this.receiverepairService.openRetdocno(data[0].docno);
      }
    });
  }
  getData() {
    let toastref = this.toast.info("กำลังประมวลผล...", null, {
      disableTimeOut: true
    });
    this.receiverepairService.getData().subscribe((data: any) => {
      this.toast.clear(toastref.toastId);
      this.data = data;
      this.toast.success("ดึงข้อมูลเรียบร้อยแล้ว", null, { timeOut: 2000 });
    });
  }
}
