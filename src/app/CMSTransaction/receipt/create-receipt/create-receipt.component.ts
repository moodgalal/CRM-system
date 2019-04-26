import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { Paymentservice } from '../../trxcase/case-payment/Payment.service';
import { ToastrService } from "ngx-toastr";
import { PublicShared } from '../../../models/PublicShared';
import { PublicSetting } from "../../../models/PublicShared";


@Component({
  selector: 'app-create-receipt',
  templateUrl: './create-receipt.component.html',
  styleUrls: ['./create-receipt.component.scss'],
  providers: [Paymentservice],
  encapsulation: ViewEncapsulation.None
})
export class CreateReceiptComponent implements OnInit {
  CM10207: any = {};
  constructor(public Setting: PublicSetting, private SRV: Paymentservice, private activeRoute: ActivatedRoute, private alerts: ToastrService) {

  }

  ngOnInit() {
    this.SRV.GetNextPaymentID().subscribe(res => {
      this.CM10207.PaymentID = res;
    });
    this.CM10207.PaymentMethodID = 1;
    this.CM10207.CheckbookCode = PublicShared.GetUserData.CheckbookCode.trim();
    this.CM10207.IsMultiply = PublicShared.GetUserData.IsMultiply;
    this.CM10207.ExchangeTableID = PublicShared.GetUserData.ExchangeTableID;
    this.CM10207.ExchangeRateID = PublicShared.GetUserData.ExchangeRateID;
    this.CM10207.ExchangeRate = PublicShared.GetUserData.ExchangeRate;
    this.GetNextPaymentNumber();
  }
  save() {
    this.SRV.SaveDataObjectPayment(this.CM10207).subscribe((res) => {
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
  CaseLookUp_Change(event) {
    this.CM10207.CaseRef = event.CaseRef;
    this.CM10207.TRXTypeID = event.TRXTypeID;
    this.CM10207.DebtorID = event.CIFNumber;
    this.CM10207.CIFTRXTypeID = event.CIFTRXTypeID;
    this.CM10207.CIFName = event.CIFName;
    this.CM10207.ClientID = event.ClientID;
    this.CM10207.ClientName = event.ClientName;
    this.CM10207.ContractID = event.ContractID;
    this.CM10207.ContractName = event.ContractName;
    this.CM10207.ClaimAmount = event.ClaimAmount;
    this.CM10207.CurrencyCode = event.CurrencyCode;
    this.CM10207.PaymentDate = new Date();
    this.CM10207.CaseStatusID = event.CaseStatusID;
  }
  GetNextPaymentNumber() {
    this.SRV.GetNextPaymentNumber(this.CM10207.CheckbookCode, this.CM10207.PaymentMethodID).subscribe(res => {
      this.CM10207.PaymentNumber = res;
    });
  }
}
