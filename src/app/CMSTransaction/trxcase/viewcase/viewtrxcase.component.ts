import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { TrxCaseService } from '../trxCase.service';
import { PublicSetting, PublicShared } from "../../../models/PublicShared";
import { CMSShared } from '../../../providers/CMS/CMSShared';
import { KaizenService } from "../../../providers/kaizen/kaizen.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from 'rxjs';
import { CustomerContactDetailsComponent } from '../customer-contact-details/customer-contact-details.component'

@Component({
  selector: 'app-viewtrxcase',
  templateUrl: './viewtrxcase.component.html',
  styleUrls: ['./viewtrxcase.component.scss'],
  providers: [TrxCaseService],
  styles: [

    `
    md-dialog-container{
      max-width:70vw;
    }
    `
  ]
})

export class ViewtrxcaseComponent implements OnInit, OnDestroy {
  IsShowFinnaceDetail: boolean = false;
  FRAME_DURATION: number = 1000 / 60;
  CurrentView: number = 0;// 1 = DOAction  ///  3 app-asginment // 4 = attachment  10 Cycle --- 11 Letter
  @ViewChild('doActiontRef') doActiontRef;
  @ViewChild('caseAttachmentRef') caseAttachmentRef;
  @ViewChild('customerContactDetailsComponent') customerContactDetailsComponent: CustomerContactDetailsComponent;
  CM00203: any = {};
  CM00104: any = {};
  PaymentHistoryList: Array<any> = [];
  DOcHistoryList: Array<any> = [];
  HistoryList: Array<any>;
  debtorObject: any;
  CurrentAddressType: any;
  uploadSaveUrl = `${PublicShared.AppSeverPath}/Uploads/CMS/Docs`;

  customerId: any;
  isJoint: any;
  employerName: any;
  nationality: any;
  caseAddress: any;

  statusFirst: any;
  statusMid: any;
  statusLast: any;
  subStatusFirst: any;
  subStatusMid: any;
  subStatusLast: any;


  smsTemplates: Array<any>;
  smsTemplateId: number = null;
  smsContent: string = null;
  phoneNumber: number = null;


  //CaseRef: any;
  //TRXTypeID: any;

  eventHandler: any;

  showPayment: boolean = false;
  showFees: boolean = false;
  toggleBar: boolean = false;
  //------------------------
  custClassData: any[] = [];
  showDoActionFun() {
    this.CurrentView = 1;
    this.ClearHistory();

  }
  constructor(public Setting: PublicSetting,
    public CMSShared: CMSShared,
    private activeRoute: ActivatedRoute,
    private trxService: TrxCaseService,
    private keizenService: KaizenService,
    private sanitizer: DomSanitizer) {

    this.PaymentHistoryList = [];
    this.HistoryList = [];
  }
  ngOnInit() {
    //let observables = Observable.map(p => Observable.fromEvent(p, "scroll").auditTime(this.FRAME_DURATION));
    this.CM00203.CaseRef = this.activeRoute.snapshot.paramMap.get("caseRef");
    this.CM00203.TRXTypeID = Number(this.activeRoute.snapshot.paramMap.get("trxTypeId"));
    this.CMSShared.GetMyAddressList();
    if (this.CM00203.CaseRef !== null && this.CM00203.TRXTypeID !== null) {
      this.eventHandler = this.activeRoute.params
        .subscribe((event) => {
          this.CM00203.CaseRef = this.activeRoute.snapshot.paramMap.get("caseRef");
          this.CM00203.TRXTypeID = Number(this.activeRoute.snapshot.paramMap.get("trxTypeId"));
          if (this.CM00203.CaseRef !== null && this.CM00203.TRXTypeID !== null) {
            console.log("I'm initialized after url changed");
            this.GetCase(this.CM00203.TRXTypeID, this.CM00203.CaseRef);
          }
        });
    }
  }
  ngOnDestroy() {
    this.eventHandler.unsubscribe();
  }
  viewFile(DocumentName) {
    this.trxService.openFile(DocumentName).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  GetCase(TRXTypeID, CaseRef) {
    this.trxService.getObject(TRXTypeID, CaseRef).subscribe((res) => {
      this.CM00203 = res;
      console.log(this.CM00203);
      if (this.CM00203.ReminderDateTime == '0001-01-01T00:00:00')
        this.CM00203.ReminderDateTime = null;
      else
        this.CM00203.ReminderDateTime = new Date(this.CM00203.ReminderDateTime);
      if (this.CM00203.LastPaymentDate == '0001-01-01T00:00:00')
        this.CM00203.LastPaymentDate = null;
      else
        this.CM00203.LastPaymentDate = new Date(this.CM00203.LastPaymentDate);

      if (this.CM00203.MATURITY_DATE == '0001-01-01T00:00:00')
        this.CM00203.MATURITY_DATE = null;
      else
        this.CM00203.MATURITY_DATE = new Date(this.CM00203.MATURITY_DATE);
      if (this.CM00203.FirstDisburementDate == '0001-01-01T00:00:00')
        this.CM00203.FirstDisburementDate = null;
      else
        this.CM00203.FirstDisburementDate = new Date(this.CM00203.FirstDisburementDate);
      if (this.CM00203.AssignDate == '0001-01-01T00:00:00')
        this.CM00203.AssignDate = null;
      else
        this.CM00203.AssignDate = new Date(this.CM00203.AssignDate);
      if (this.CM00203.FirstLifeOverDueDate == '0001-01-01T00:00:00')
        this.CM00203.FirstLifeOverDueDate = null;
      else
        this.CM00203.FirstLifeOverDueDate = new Date(this.CM00203.FirstLifeOverDueDate);
      if (this.CM00203.FirstLifeOverDueDate == '0001-01-01T00:00:00')
        this.CM00203.FirstLifeOverDueDate = null;
      else
        this.CM00203.FirstLifeOverDueDate = new Date(this.CM00203.FirstLifeOverDueDate);


      this.CM00203.Balance = parseFloat(this.CM00203.Balance).toFixed(this.CM00203.DecimalDigit);
      //console.log(this.CM00203);
      if (this.CM00203.AddressCode !== undefined || this.CM00203.AddressCode != null) {
        this.CurrentAddressType = this.CMSShared.AddressList.filter((s) => s.AddressCode == this.CM00203.AddressCode)[0];
        setTimeout(() => {
          this.customerContactDetailsComponent.AddressList_Change();
        }, 300)
      }
    });
  }

  getSmsTemplates() {
    this.trxService.getTemplates()
      .subscribe((res) => {
        this.smsTemplates = res;
      })
  }

  sendMessage() {
    this.trxService.saveSms(this.CM00203.TRXTypeID, this.CM00203.CaseRef, this.phoneNumber, this.smsTemplateId, this.smsContent)
      .subscribe((res) => {
        this.smsTemplates = res;

        window.alert("Message Sent");
        this.phoneNumber = null;
        this.smsTemplateId = null;
        this.smsContent = null;
      }, (err) => {
        console.log(err)
      })
  }
  setTemplateId(event) {
    this.smsTemplateId = event.TemplateID;
  }

  getDebtorService() {
    this.trxService.getDebtorObject(this.CM00203.CIFTRXTypeID.toString(), this.CM00203.CIFNumber.trim())
      .subscribe((res) => {
        console.log(res);
        this.debtorObject = res;
        if (this.debtorObject.BirthDate == '0001-01-01T00:00:00')
          this.debtorObject.BirthDate = null;
        else
          this.debtorObject.BirthDate = new Date(this.debtorObject.BirthDate);
      })
  }
  updateDeptor() {


    this.trxService.updateDebtor(this.debtorObject)
      .subscribe((res) => {

      }, (err) => {
        //this.alerts.error(`Try again later please`);
      })
  }

  GetCaseDoAction() {
    this.ClearHistory();
    this.trxService.GetCaseDoAction(this.CM00203.TRXTypeID.toString(), this.CM00203.CaseRef.trim())
      .subscribe((res) => {
        console.log(this.CM00203.TRXTypeID.toString());
        console.log(this.CM00203.CaseRef.trim());
        this.HistoryList = res;
      })
  }
  GetCaseDoActionOpenByDebtor() {
    this.HistoryList = [];
    this.trxService.GetCaseDoAction(this.CM00203.CIFTRXTypeID.toString(), this.CM00203.CIFNumber.trim())
      .subscribe((res) => {
        this.HistoryList = res;
      })
  }
  GetPaymentHistory() {
    this.PaymentHistoryList = [];
    this.trxService.GetPayment(this.CM00203.TRXTypeID.toString(), this.CM00203.CaseRef.trim())
      .subscribe((res) => {
        this.PaymentHistoryList = res;
      })
  }
  GetPaymentByDebtor() {
    this.ClearHistory();
    this.trxService.GetPaymentByDebtor(this.CM00203.CIFTRXTypeID.toString(), this.CM00203.CIFNumber.trim())
      .subscribe((res) => {
        this.PaymentHistoryList = res;
      })
  }
  GetDocuments() {
    this.ClearHistory();
    this.trxService.GetDocuments(this.CM00203.TRXTypeID.toString(), this.CM00203.CaseRef.trim())
      .subscribe((res) => {
        console.log(res);
        this.DOcHistoryList = res;
      })
  }
  GetDocumentsByDebtor() {
    this.ClearHistory();
    this.trxService.GetDocumentsByDebtor(this.CM00203.CIFTRXTypeID.toString(), this.CM00203.CIFNumber.trim())
      .subscribe((res) => {
        this.DOcHistoryList = res;
      })
  }
  TestDownLoad() {
    //var ifr = document.createElement('iframe');
    //ifr.style.display = 'none';
    //document.body.appendChild(ifr);
    //ifr.src = "/api/FileApi/DownloadFile?filename='" + escape(filename)
    //  + "'&Destination=" + escape(destination);
    //ifr.onload = function () {
    //  document.body.removeChild(ifr);
    //  ifr = null;

    //};
    //var dataURI = `http://localhost:62250/Uploads/CMS/Docs/`;
    //kendo.saveAs({
    //  dataURI: dataURI,fileName: "New Text Document.txt"
    //});
  }
  ClearHistory() {
    this.PaymentHistoryList = [];
    this.DOcHistoryList = [];
    this.HistoryList = [];
  }
  showCaseAttachmentFun() {
    this.CurrentView = 4;
    this.ClearHistory();
  }
  showPaymentFunc() {
    this.ClearHistory();
    this.CurrentView = 2;
  }
  showFeesFunc() {
    this.showFees = !this.showFees;
    this.toggleBar = !this.toggleBar;
  }
  ShowAsgin() {
    this.ClearHistory();
    this.CurrentView = 3;
  }
  DoAction_Changed(event) {
    this.CurrentView = 0;
  }
  casePayment_Changed(event) {
    this.CurrentView = 0;
  }
  Asginment_Change(event) {
    this.CurrentView = 0;
  }
  ShowDataCurrentView(CurrentView) {
    this.CurrentView = CurrentView;
    this.ClearHistory();
  }

  fees_Changed(event) {
    if (event) {
      this.showFees = !this.showFees;
      this.toggleBar = !this.toggleBar;
    }
  }
}
