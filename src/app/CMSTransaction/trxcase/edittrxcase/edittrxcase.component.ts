import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { TrxCaseService } from '../trxCase.service';
import { PublicSetting } from "../../../models/PublicShared";
import { CMSShared } from '../../../providers/CMS/CMSShared';
import { KaizenService } from "../../../providers/kaizen/kaizen.service";
import { DomSanitizer } from "@angular/platform-browser";
import { CustomerContactDetailsComponent } from '../customer-contact-details/customer-contact-details.component'
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-edittrxcase',
  templateUrl: './edittrxcase.component.html',
  styleUrls: ['./edittrxcase.component.scss'],
  providers : [TrxCaseService]
})
export class EdittrxcaseComponent implements OnInit {
  @ViewChild('doActiontRef') doActiontRef;
  @ViewChild('caseAttachmentRef') caseAttachmentRef;
  @ViewChild('customerContactDetailsComponent') customerContactDetailsComponent: CustomerContactDetailsComponent;
  CM00203: any = {};
  CM00104: any = {};
  HistoryList: Array<any>;
  debtorObject: any;
  CurrentAddressType: any;

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


  remark: any;

  CaseRef: any;
  TRXTypeID: any;

  eventHandler: any;

  constructor(public Setting: PublicSetting,
    public CMSShared: CMSShared,
    private activeRoute: ActivatedRoute,
    private trxService: TrxCaseService,
    private keizenService: KaizenService,
    private alerts: ToastrService) {

    this.HistoryList = [];
  }
  ngOnInit() {
    //let observables = Observable.map(p => Observable.fromEvent(p, "scroll").auditTime(this.FRAME_DURATION));
    this.CaseRef = this.activeRoute.snapshot.paramMap.get("caseRef");
    this.TRXTypeID = Number(this.activeRoute.snapshot.paramMap.get("trxTypeId"));
    this.CMSShared.GetMyAddressList();
    if (this.CaseRef !== null && this.TRXTypeID !== null) {
      this.eventHandler = this.activeRoute.params.subscribe((event) => {
          this.CaseRef = this.activeRoute.snapshot.paramMap.get("caseRef");
          this.TRXTypeID = Number(this.activeRoute.snapshot.paramMap.get("trxTypeId"));
          if (this.CaseRef !== null && this.TRXTypeID !== null) {
            this.GetCase(this.TRXTypeID, this.CaseRef);
          }
        });
    }
  }
  ngOnDestroy() {
    this.eventHandler.unsubscribe();
  }


  GetCase(TRXTypeID, CaseRef) {
    this.trxService.getObject(TRXTypeID, CaseRef).subscribe((res) => {
      this.CM00203 = res;
      console.log(this.CM00203.AMT08);
      this.CM00203.MATURITY_DATE = new Date(this.CM00203.MATURITY_DATE);
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
  SaveData() {
    //console.log(this.CM00203.AMT08);
    this.trxService.updateObject(this.CM00203).subscribe((res) => {
      if (res.Status)
        this.alerts.success("Data Saved Successfully")
      else
        this.alerts.error(res.Description);
    });
  }


}
