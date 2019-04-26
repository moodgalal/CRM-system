import { Component, EventEmitter, Input, OnInit, Output,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { ReceiptPaymentService } from '../ReceiptPayment.service';
import { ToastrService } from "ngx-toastr";
import { PublicShared } from '../../../models/PublicShared';
import { PublicSetting } from "../../../models/PublicShared";

@Component({
    selector: 'app-update-receipt',
    templateUrl: './update-receipt.component.html',
    styleUrls: ['./update-receipt.component.scss'],
    providers: [ReceiptPaymentService],
    encapsulation: ViewEncapsulation.None

})
export class UpdateReceiptComponent implements OnInit {
    CM10207: any = {};


    constructor(public Setting: PublicSetting,private SRV: ReceiptPaymentService, private activeRoute: ActivatedRoute, private alerts: ToastrService) {

    }

    ngOnInit() {
        this.CM10207.PaymentID = this.activeRoute.snapshot.paramMap.get("PaymentID");
        this.SRV.GetSingle(this.CM10207.PaymentID).subscribe((res) => {
          this.CM10207 = res;
          // this.CM10207.IsApproved = false; { NOTE: if you want to test disabled case }
          this.CM10207.PaymentDate = new Date(this.CM10207.PaymentDate);
            if (this.CM10207.BankCheckDate != null)
                this.CM10207.BankCheckDate = new Date(this.CM10207.BankCheckDate);
            console.log(this.CM10207);
            console.log(this.CM10207.CheckbookCode);
        }, () => {
            this.alerts.error("Try Again Later Please")
        })
    }
    save() {
      this.SRV.UpdateData(this.CM10207).subscribe((res) => {
            if (res.Status) {
                this.alerts.success(res.Massage);
            } else {
                this.alerts.error(res.Description);
            }
        }, () => {
            this.alerts.error("Try Again Later Please")
        })
    }
    Currency_Changed(event) {
        console.log(event);
    }
    CheckBook_Change(event) {
        this.CM10207.CheckbookCode = event;
    }
    Bank_Change(event) {
        this.CM10207.BankCode = event;
    }

}
