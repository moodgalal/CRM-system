import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DebtorService } from "../DebtorService";
import { ToastrService } from "ngx-toastr";
import { PublicSetting } from "../../../models/PublicShared";
import { debtorClassService } from '../../set/debtorclass/debtorClassService';
import { PirorityService } from '../../set/priority/priority.service';
import { debtorStatusService } from '../../set/debtor-status/debtorStatusService';
import { debtorGroupService } from '../../set/debtorgroup/debtorGroup.service';
interface ItemInt {
  text: string,
  value: number
}
@Component({
  selector: 'app-update-debtor',
  templateUrl: './update-debtor.component.html',
  styleUrls: ['./update-debtor.component.scss'],
  providers: [DebtorService, debtorClassService, PirorityService, debtorStatusService, debtorGroupService]
})
export class UpdateDebtorComponent implements OnInit, OnDestroy {
  debtor = {} as any;
  debtorId: any;
  trxId: any;
  handler: any;
  //debtor: any = {};
  DebtorClassList: any[] = [];
  object: any;
  showDoAction: boolean = false;
  showCaseAttachment: boolean = false;

  Sys00008List: any[] = [];
  CM00014List: any[] = [];
  CM00011List: any[] = [];
  CM00012List: any[] = [];
  trxTypeData: any[] = [];
  dataSourcesTmp = [];
  constructor(private activatedRoute: ActivatedRoute,
    private service: DebtorService,
    private alerts: ToastrService,
    public setting: PublicSetting,
    private _debtorClassService: debtorClassService,
    private _PirorityService: PirorityService,
    private _debtorStatusService: debtorStatusService,
    private _debtorGroupService: debtorGroupService
  ) { }
  public Sys00011: Array<ItemInt> = [
    { text: "Male", value: 1 },
    { text: "Female", value: 2 },
    { text: "N/A", value: 3 }
  ];
  ngOnInit() {
    this.handler = this.activatedRoute.params.subscribe((res) => {
      this.debtorId = res['debtorId'];
      this.trxId = res['trxId'];
      this.getObject(this.trxId, this.debtorId);
    });
    this.dataSourcesTmp = [];
    this.setting.DataSources.forEach((source: any) => {
      if (source.TableSource.trim() === 'CM00100' && source.ORGTRXTypeID === null) {
        this.dataSourcesTmp.push(source);
      }
    });
    this.service.GetAllCustClass().subscribe((res) => {
      this.DebtorClassList = res;
    }, (err) => {
      console.log(err);
      });
    this.service.GetAllReligion().subscribe((res) => {
      this.Sys00008List = res;
    }, (err) => {
      console.log(err);
    });
    this._debtorGroupService.GetAll().subscribe(
      (res) => {
        this.CM00011List = res;
      }, (err) => console.log(err));
    this._PirorityService.getAll().subscribe(
      (res) => {
        this.CM00012List = res;
      }, (err) => {
        console.log(err)
      }
    );
    this._debtorStatusService.GetAll().subscribe(
      (res) => {
        this.CM00014List = res;
      }, (err) => console.log(err));
  }


  ngOnDestroy() {
    this.handler.unsubscribe();
  }

  getObject(TRXTypeID, DebtorID) {
    this.service.getSingle(TRXTypeID, DebtorID).subscribe((res) => {
      this.debtor = res;
      console.log(this.debtor);
      if (this.debtor.BirthDate == '0001-01-01T00:00:00')
        this.debtor.BirthDate = null;
      else
        this.debtor.BirthDate = new Date(this.debtor.BirthDate);
      if (this.debtor.CPRExpiryDate == '0001-01-01T00:00:00')
        this.debtor.CPRExpiryDate = null;
      else
        this.debtor.CPRExpiryDate = new Date(this.debtor.CPRExpiryDate);
      if (this.debtor.CPRIssueDate == '0001-01-01T00:00:00')
        this.debtor.CPRIssueDate = null;
      else
        this.debtor.CPRIssueDate = new Date(this.debtor.CPRIssueDate);
      if (this.debtor.PassportExpiryDate == '0001-01-01T00:00:00')
        this.debtor.PassportExpiryDate = null;
      else
        this.debtor.PassportExpiryDate = new Date(this.debtor.PassportExpiryDate);
      if (this.debtor.PassportIssueDate == '0001-01-01T00:00:00')
        this.debtor.PassportIssueDate = null;
      else
        this.debtor.PassportIssueDate = new Date(this.debtor.PassportIssueDate);
      if (this.debtor.ResidntPrmtExpryDate == '0001-01-01T00:00:00')
        this.debtor.ResidntPrmtExpryDate = null;
      else
        this.debtor.ResidntPrmtExpryDate = new Date(this.debtor.ResidntPrmtExpryDate);
      this.debtor.CreatedDate = new Date(this.debtor.CreatedDate);
    }, (err) => {
      console.log(err);
    })
  }

  updateDeptor() {
    this.service.updateDebtor(this.debtor)
      .subscribe((res) => {
        if (res.Status)
          this.alerts.success(res.Massage)
        else this.alerts.error(res.Massage)
      }, (err) => {
        this.alerts.error(`Try again later please`);
      })
  }

  deleteDebtor() {
    this.service.deleteDebtor(this.trxId, this.debtorId)
      .subscribe((res) => {
        this.alerts.success(`Deleted Successfully`);
      }, (err) => {
        this.alerts.error(`Try again later please`);
      })
  }
}
