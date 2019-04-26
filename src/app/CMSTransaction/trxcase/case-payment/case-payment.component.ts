import {Component, EventEmitter, Input, OnInit, Output,ViewEncapsulation} from '@angular/core';
import { Paymentservice } from './Payment.service';
import { ToastrService } from "ngx-toastr";
import { PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-case-payment',
  templateUrl: './case-payment.component.html',
  styleUrls: ['./case-payment.component.scss'],
  providers: [Paymentservice],
  encapsulation: ViewEncapsulation.None
})
export class CasePaymentComponent implements OnInit {
  CM10207: any = {};
  @Input() CaseMain: any;
  public PaymentMethod: Array<{ text: string, value: number }> = [
    { text: "Cash", value: 1 },
    { text: "Credit", value: 2 },
    { text: "Check", value: 3 }
  ];

  @Output('hideMe') hideMe = new EventEmitter();
  constructor(private SRV: Paymentservice, private alerts: ToastrService) {
   
  }

  ngOnInit() {
    this.SRV.GetNextPaymentID().subscribe(res => {
      this.CM10207.PaymentID = res;
    });
    this.CM10207.PaymentMethodID = 1;
    this.CM10207.CaseRef = this.CaseMain.CaseRef;
    this.CM10207.TRXTypeID = this.CaseMain.TRXTypeID;
    this.CM10207.DebtorID = this.CaseMain.CIFNumber; 
    this.CM10207.CIFTRXTypeID = this.CaseMain.CIFTRXTypeID;  
    this.CM10207.CIFName = this.CaseMain.CIFName;
    this.CM10207.ClientID = this.CaseMain.ClientID;
    this.CM10207.ClientName = this.CaseMain.ClientName;
    this.CM10207.ContractID = this.CaseMain.ContractID;
    this.CM10207.ContractName = this.CaseMain.ContractName;
    this.CM10207.ClaimAmount = this.CaseMain.ClaimAmount;
    this.CM10207.CurrencyCode = this.CaseMain.CurrencyCode;
    this.CM10207.PaymentDate = new Date(); 
    this.CM10207.CaseStatusID = this.CaseMain.CaseStatusID;

    this.CM10207.CheckbookCode = PublicShared.GetUserData.CheckbookCode.trim();
    this.CM10207.IsMultiply = PublicShared.GetUserData.IsMultiply;
    this.CM10207.ExchangeTableID = PublicShared.GetUserData.ExchangeTableID;
    this.CM10207.ExchangeRateID = PublicShared.GetUserData.ExchangeRateID;
    this.CM10207.ExchangeRate = PublicShared.GetUserData.ExchangeRate;
    this.GetNextPaymentNumber();

  }
  Payment_Closing() {
    this.hideMe.emit(true);
  }
  save() {
    this.SRV.SaveDataObjectPayment(this.CM10207).subscribe((res) => {
        if (res.Status)
        {
            this.alerts.success(res.Massage);
            this.Payment_Closing();
        } else {
            this.alerts.error(res.Description);
        }
      }, () => {
        this.alerts.error("Try Again Later Please")
      })
  }
  //-----------------
  Currency_Changed(event) {
    console.log(event);
  }
  CheckBook_Change(event) {
    this.CM10207.CheckbookCode = event;
    this.GetNextPaymentNumber();
  }
  Bank_Change(event) {
    this.CM10207.BankCode = event;
  }
  GetNextPaymentNumber() {
    this.SRV.GetNextPaymentNumber(this.CM10207.CheckbookCode, this.CM10207.PaymentMethodID).subscribe(res => {
      this.CM10207.PaymentNumber = res;
    });
  }
}
