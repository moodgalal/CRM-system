import { Component, OnInit } from '@angular/core';
import { CMSService } from '../../../providers/CMS/Transations.service';
import { PublicShared, PublicSetting } from '../../../models/PublicShared';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-case-update',
    templateUrl: './case-update.component.html',
    styleUrls: ['./case-update.component.scss'],
    providers: [CMSService]
})
export class CaseUpdateComponent implements OnInit {
    KaizenID;
    uploadSaveUrl = `${PublicShared.AppSeverPath}/MasterData/GetExcelColumns`;
    ExcelColumns = [];
    TableName = "";
    dataSourcesTmp = [];
    CaseFieldList: Array<any> = [];
    savedFields: Array<any> = [];
    SelectedCaseFieldList: Array<any> = [];
    CuurentField = { FieldName: "" }
    TRXTypeID;
    isChecked = true;
    ClientID = "";
    SelectedCaseAccountNo = "";
    fieldDiffrence: Array<any> = [];
    constructor(public Setting: PublicSetting, private SRV: CMSService, private alerts: ToastrService) { }

    ngOnInit() {
        this.SRV.GetNextBulkUpdateID().subscribe(res => {
            this.KaizenID = res;
        });
        this.dataSourcesTmp = [];
        this.Setting.DataSources.forEach((source: any) => {
            if (source.TableSource.trim() === 'CM00203' && source.ORGTRXTypeID === null) {
                this.dataSourcesTmp.push(source);
            }
        });
    }
    errHandler(event) {
        console.log(event);
    }
    successEventHandler(e: SuccessEvent) {
        this.ExcelColumns = e.response.json().ExcelColumns;
        this.TableName = e.response.json().TableName;
        this.ExcelColumns.push({ Index: "NULL", ColumnName: "N/A" });
        this.ExcelColumns.push({ Index: "Fixed", ColumnName: "Fixed" });
    }
    dataSrcChange(event) {
        console.log(event);
        this.SRV.GetAllOVerridableFields(this.TRXTypeID).subscribe(res => {
            this.CaseFieldList = res;
            this.CaseFieldList.forEach((source: any) => {
                source.isSelected = false;
                source.FieldValue = null;
            });
        });
    }
    getValue(event) {
        console.log(event);
        this.ClientID = event.ClientID.trim();
    }
    SaveBulkUpdate() {
        if (this.isChecked) {
            this.ClientID = "";
        }
        this.SelectedCaseFieldList = [];
        this.CaseFieldList.forEach((source: any) => {
            if (source.isSelected) {
                this.SelectedCaseFieldList.push(source);
            }
        });
        this.SRV.SaveBulkUpdate(this.ClientID, this.KaizenID, this.TRXTypeID, this.SelectedCaseAccountNo, this.TableName, this.SelectedCaseFieldList).subscribe(res => {
            if (res.Status) {
                this.ShowNextField();
            } else {
                this.showErrMessage(res.Massage);
            }
        });
    }
    counter = 0;
    ShowNextField() {
        if (this.SelectedCaseFieldList.length == 0) {
            this.fieldDiffrence = [];
            this.showErrMessage(`There is no fields`);
            return;
        }

        this.CuurentField = this.SelectedCaseFieldList[this.counter];
        this.SRV.GetUpdatedFieldData(this.KaizenID, this.TRXTypeID, this.CuurentField.FieldName).subscribe(res => {
            this.fieldDiffrence = res;
            console.log(this.fieldDiffrence);
            if (res) {
              this.counter = this.counter + 1;
            }

        });
    }
    UpdatedFieldData() {
        this.SRV.UpdatedFieldData(this.KaizenID, this.CuurentField.FieldName).subscribe(res => {
          if (res.Status) {
            this.alerts.success(res.Massage);
            this.SelectedCaseFieldList.shift();
            //alert(this.counter);
            //alert(this.SelectedCaseFieldList[this.counter]);
            //alert(this.SelectedCaseFieldList[this.counter] == this.SelectedCaseFieldList.length);
            //alert(this.SelectedCaseFieldList.length);

              if (this.SelectedCaseFieldList[this.counter] == this.SelectedCaseFieldList.length)
                this.ShowNextField();
            } else {
                this.showErrMessage(res.Massage);
            }
        });

    }

    showErrMessage(errBody) {
        this.alerts.error(`${errBody}`);
    }
  PostUploadBulkAction() {
      console.log('asfsd');
  }
}
