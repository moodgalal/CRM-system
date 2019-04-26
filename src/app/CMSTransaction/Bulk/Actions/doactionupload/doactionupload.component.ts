import { Component, OnInit } from '@angular/core';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { PublicSetting, PublicShared } from "../../../../models/PublicShared";
import { ToastrService } from 'ngx-toastr';
import { CMSService } from '../../../../providers/CMS/Transations.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-doactionupload',
    templateUrl: './doactionupload.component.html',
    styleUrls: ['./doactionupload.component.scss'],
    providers: [CMSService]
})
export class DoactionuploadComponent implements OnInit {
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
    constructor(public Setting: PublicSetting, private SRV: CMSService, private alerts: ToastrService, private _router: Router) { }

    ngOnInit() {
        this.SRV.GetNextDoAction().subscribe(res => {
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
    showErrMessage(errBody) {
        this.alerts.error(`${errBody}`);
    }

    uploadData() {
        this.SRV.UploadBulkAction(this.ClientID, this.KaizenID, this.TRXTypeID, this.TableName, this.SelectedCaseAccountNo).subscribe(res => {
            //alert(res.Status);
            if (res.Status) {
                this.SRV.GetUploadBulkAction(this.KaizenID).subscribe(res => {
                    this.CaseList = res;
                });
            } else {
                this.showErrMessage(res.Massage);
            }
        }, (err) => {
            console.log(err)
        })
    }
    PostUploadBulkAction() {
        this._router.navigate(['/Doactionbulk'])
    }
  errHandler(event) {
    console.log(event);
  }
}
