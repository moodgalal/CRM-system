import { Component, OnInit } from '@angular/core';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { PublicSetting, PublicShared } from "../../../models/PublicShared";
import { ToastrService } from 'ngx-toastr';
import { CMSService } from '../../../providers/CMS/Transations.service';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.scss'],
    providers: [CMSService]
})
export class AssignmentComponent implements OnInit {
    KaizenID;
    uploadSaveUrl = `${PublicShared.AppSeverPath}/MasterData/GetExcelColumns`;
    dataSourcesTmp = [];
    ExcelColumns = [];
    TableName = "";
    isChecked = true;
    ClientID = "";
    TRXTypeID;
    SelectedCaseAccountNo;
    UploadAgentID;
    CaseList = [];
    constructor(public Setting: PublicSetting, private SRV: CMSService, private alerts: ToastrService) { }

    ngOnInit() {
        this.SRV.GetNextTRX_BulkAssignment().subscribe(res => {
            this.KaizenID = res;
            console.log(this.KaizenID);
        });
        this.dataSourcesTmp = [];
        this.Setting.DataSources.forEach((source: any) => {
            if (source.TableSource.trim() === 'CM00203' && source.ORGTRXTypeID === null) {
                this.dataSourcesTmp.push(source);
            }
        });
    }
    successEventHandler(e: SuccessEvent) {
        console.log(e);
        this.ExcelColumns = e.response.json().ExcelColumns;
        this.TableName = e.response.json().TableName;
    }
    getValue(event) {
        this.ClientID = event.ClientID.trim();
    }
    uploadData() {
        this.SRV.UploadCreateAssigmnemtData(this.ClientID, this.KaizenID, this.TRXTypeID, this.TableName, this.SelectedCaseAccountNo, this.UploadAgentID).subscribe(res => {
            //alert(res.Status);
            if (res.Status) {
                this.SRV.GetBulkAssignment(this.KaizenID).subscribe(res => {
                    this.CaseList = res;
                });
            } else {
                this.showErrMessage(res.Massage);
            }
        }, (err) => {
            console.log(err)
        })
    }
    showErrMessage(errBody) {
        this.alerts.error(`${errBody}`);
    }

    PostBulkCaseAssignment() {
        this.SRV.PostBulkCaseAssignment(this.KaizenID, this.TRXTypeID).subscribe(res => {

            if (res.Status) {
                this.Setting.GoBack();
            } else {
                this.showErrMessage(res.Massage);
            }
        });
    }

  errHandler(event) {
      console.log(event);
  }

}
