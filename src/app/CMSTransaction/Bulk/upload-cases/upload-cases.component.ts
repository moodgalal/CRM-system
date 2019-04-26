import { Component, OnInit } from '@angular/core';
import { BulkService } from '../BulkService';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { PublicSetting, PublicShared } from "../../../models/PublicShared";
import { CMSShared } from '../../../providers/CMS/CMSShared';
import { GridData } from '../../../models/data-model';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-upload-cases',
  templateUrl: './upload-cases.component.html',
  styleUrls: ['./upload-cases.component.scss'],
  providers: [BulkService, PublicShared]
})
export class UploadCasesComponent implements OnInit {
  TransiactionNumber;
  uploadSaveUrl = `${PublicShared.AppSeverPath}/MasterData/GetExcelColumns`;
  ExcelColumns = [];
  TableName = "";
  dataSourcesTmp = [];
  CaseFieldList: Array<any> = [];
  SelectedDataSource;
  isChecked = true;
  value = null;
  SelectedTRXTypeID: any;
  CurrentAddressType;
  cusrrentWIndow = 0;
  filterStatusList = [];
  selectedStatus: any = {};
  childStatus = [];
  selectedChildStatus: any = {};
  selectedScript: any = {};
  scriptingList = [];
  CM10701: any = {};
  CM00205: any = {};
  UploadedDataModel: any = {};
  DebtorIDList: Array<any> = [];
  SelectedDebtorIDType: any = {};
  DebtorFields: Array<any> = [];

  DebtorAddressDs: Array<any> = [];
  DebtorAddressFields: Array<any> = [];
  AddressTypeSelectedTRXTypeID;

  DuplicateCases: GridData;
  NewCases: Array<any> = [];
  OldCasesList: Array<any> = [];
  RepeatedCases: Array<any> = [];
  SelectedAgentID;
  constructor(private SRV: BulkService, public setting: PublicSetting, public CMSShared: CMSShared, private alerts: ToastrService) {
    this.UploadedDataModel.BookingDate = new Date();
    this.UploadedDataModel.BookingDate = new Date();
  }
  ngOnInit() {
    this.SRV.GetNextBulkUpdateID().subscribe(res => {
      this.TransiactionNumber = res;
    });
  }
  successEventHandler(e: SuccessEvent) {

    this.ExcelColumns = e.response.json().ExcelColumns;
    this.TableName = e.response.json().TableName;
    this.ExcelColumns.push({ Index: "NULL", ColumnName: "N/A" });
    this.ExcelColumns.push({ Index: "Fixed", ColumnName: "Fixed" });
    this.DebtorIDList = [];
    this.setting.DataSources.forEach((source: any) => {
      if (source.TableSource.trim() === 'CM00100' && source.ORGTRXTypeID === null) {
        this.DebtorIDList.push(source);
      }
    });
  }
  Save01() {
    this.cusrrentWIndow = 1;
  }
  DebtorIDList_Changed() {
    this.SRV.GetAllOVerridableFields(this.SelectedDebtorIDType.TRXTypeID).subscribe(res => {
      this.DebtorFields = res;
      this.DebtorFields.forEach((source: any) => {
        source.isSelected = false;
        source.FieldValue = null;
      });
    });
  }
  TRXTypeID_Changed() {
    this.SRV.GetAllOVerridableFields(this.SelectedTRXTypeID.TRXTypeID).subscribe(res => {
      this.CaseFieldList = res;
      this.CaseFieldList.forEach((source: any) => {
        source.isSelected = false;
        source.FieldValue = null;
      });
    });
    this.CMSShared.GetCaseStatusList();
  }
  errHandler(event) {
    console.log(event);
  }

  UploadDebtor() {
    this.CMSShared.GetMyAddressList();
    this.DebtorAddressDs = [];
    this.SRV.UploadDebtorData(this.SelectedDebtorIDType.TRXTypeID, this.TableName, this.DebtorFields).subscribe(res => {
      if (res.Status) {
        this.SRV.ValidateMissingDebtorIDData().subscribe(res => {
          if (res.Items.length == 0) {
            this.SRV.PostUploadDebtorData().subscribe(res => {
              if (res.Status) {
                this.setting.DataSources.forEach((source: any) => {
                  if (source.TableSource.trim() === 'CM00104') {
                    this.DebtorAddressDs.push(source);
                  }
                });
                this.cusrrentWIndow = 2;
              }
            });
          }
        });
        this.alerts.success(res.Massage);
      } else {
        this.alerts.error(res.Description);
      }
    }, (err) => { console.log(err) })

  }
  AddressTypeSelectedTRXTypeID_Changed() {
    this.SRV.GetAllOVerridableFields(this.AddressTypeSelectedTRXTypeID.TRXTypeID).subscribe(res => {
      this.DebtorAddressFields = res;
      this.DebtorAddressFields.forEach((source: any) => {
        source.isSelected = false;
        source.FieldValue = null;
      });
    });
  }
  UploadDebtorAddress() {
    this.DebtorAddressDs = [];
    this.SRV.UploadDebtorAddressData(this.SelectedDebtorIDType.TRXTypeID, this.CurrentAddressType, this.TableName, this.DebtorAddressFields).subscribe(res => {
      if (res.Status) {
        this.SRV.PostUploadDebtorAddressData().subscribe(res => {
          if (res.Status) {
            this.cusrrentWIndow = 3;
            this.alerts.success(res.Massage);
          }
        });

      } else {
        this.alerts.error(res.Description);
      }
    }, (err) => { console.log(err) })

  }

  UploadCaseData() {
    this.SRV.UploadCaseData(this.SelectedTRXTypeID.TRXTypeID, this.CurrentAddressType, this.UploadedDataModel.ClientID, this.SelectedDebtorIDType.TRXTypeID, this.TableName
      , this.CaseFieldList).subscribe(res => {
        if (res.Status) {
          this.SRV.ValidateMissingCaseData().subscribe(res => {
            if (res.Items.length == 0) {
              this.SRV.ValidateCaseDuplicateForUploading().subscribe(res => {
                if (res.Items.length == 0) {
                  this.ValidateRepeatedCases();
                } else {
                  //show Errors
                }
              });
            } else {
              //show Errors
            }
          });
          this.alerts.success(res.Massage);
        } else {
          this.alerts.error(res.Description);
        }
      }, (err) => { console.log(err) })
  }
  ValidateCaseNew() {
    this.cusrrentWIndow = 6;
    this.RepeatedCases = [];
    this.OldCasesList = [];
    this.SRV.ValidateCaseNew().subscribe(res => {
      this.NewCases = res.Items;
      //if (this.NewCases.Items.length == 0) {

      //} else {
      //  //show Errors
      //}
    });
  }
  ValidateRepeatedCases() {
    this.cusrrentWIndow = 4;
    this.SRV.ValidateRepeatedCases().subscribe(res => {
      this.RepeatedCases = res.Items;
      if (this.RepeatedCases.length == 0) {
        this.ValidateCaseOld();
      } else {
        //show Errors
      }
    });
  }
  ValidateCaseOld() {
    this.RepeatedCases = [];
    this.cusrrentWIndow = 5;
    this.SRV.ValidateCaseOld().subscribe(res => {
      this.OldCasesList = res.Items;
      if (res.Items.length == 0) {
        this.ValidateCaseNew();
      } else {
        //show Errors
      }
    });
  }
  PostCase() {
    if (this.NewCases.length == 0) {
      this.goBack();
      return;
    }
    this.SRV.PostUploadCases(this.UploadedDataModel).subscribe(res => {
      if (res.Status) {
        this.cusrrentWIndow = 7;
        this.CM00205.AssignHistoryDate = new Date();
        this.alerts.success(res.Massage);
      } else {
        this.alerts.error(res.Description);
      }
    }, (err) => { console.log(err) })
  }
  goBack() {
    window.history.back();
  }
  getValue(event) {
    console.log(event);
  }

  DeleteBulk() {
    console.log('save ....')
  }
  currency_Changed(event) {
    this.UploadedDataModel.CurrencyCode = event.CurrencyCode.trim();
    this.UploadedDataModel.DecimalDigit = event.DecimalDigit;
    this.UploadedDataModel.IsMultiply = event.IsMultiply;
    this.UploadedDataModel.ExchangeRate = event.ExchangeRate;
  }
  Client_Changed(event) {
    this.UploadedDataModel.ClientID = event.ClientID.trim();
    //this.UploadedDataModel.ClientName = event.ClientName.trim();
  }
  ClientContract_Changed(event) {
    this.UploadedDataModel.ContractID = event.ContractID.trim();
    this.UploadedDataModel.ContractName = event.ContractName.trim();
  }
  AgentTo_Change(event) {
    this.CM00205.ToAgentID = event;
  }
  PostAsginment() {
    this.SRV.AddBulkUploadAsginment(this.CM00205).subscribe((res) => {
      if (res.Status) {
        this.alerts.success(res.Massage);

      } else {
        this.alerts.error(res.Description);
      }
    }, () => {
      this.alerts.error("Try Again Later Please")
    })
  }
}
