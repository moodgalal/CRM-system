import { Component, OnInit } from '@angular/core';
import { CMSService } from '../../../providers/CMS/Transations.service';
import { PublicShared } from '../../../models/PublicShared';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { PublicSetting } from "../../../models/PublicShared";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-bulk-archive',
    templateUrl: './bulk-archive.component.html',
    styleUrls: ['./bulk-archive.component.scss'],
    providers: [CMSService]
})

export class BulkArchiveComponent implements OnInit {
    KaizenID;
    uploadSaveUrl = `${PublicShared.AppSeverPath}/MasterData/GetExcelColumns`;
    ExcelColumns = [];
    TableName = "";
    isChecked = true;
    ClientID = "";
    TRXTypeID;
    dataSourcesTmp = [];
    SelectedCaseAccountNo = "";
    ArchiveList = [];
    constructor(public Setting: PublicSetting, private SRV: CMSService, private alerts: ToastrService) { }

    ngOnInit() {
        this.SRV.GetNextBulkUpdateID().subscribe(res => {
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
    errHandler(event) {
        console.log(event);
    }
    successEventHandler(e: SuccessEvent) {
        console.log(e);
        this.ExcelColumns = e.response.json().ExcelColumns;
        this.TableName = e.response.json().TableName;
    }
    getValue(event) {
        this.ClientID = event.ClientID;
    }
    SaveArchiveUpload() {
        if (this.isChecked) {
            this.ClientID = "";
        }
        this.SRV.ArchiveUpload(this.ClientID, this.KaizenID, this.TRXTypeID, this.SelectedCaseAccountNo, this.TableName).subscribe(res => {
          console.log(res);
          alert('ssssssssssssssssssssssssssss');
            if (res.Status) {
                this.SRV.GetArchiveUpload(this.KaizenID).subscribe(res => {
                    this.ArchiveList = res;
                });
            } else {
                this.showErrMessage(res.Massage);
            }
        });
    }

    confirmUploadArchive() {
        this.SRV.PostArchiveUpload(this.KaizenID).subscribe(res => {

            if (res.Status) {
                this.SRV.PostArchiveUpload02(this.KaizenID).subscribe(res => {
                    if (res.Status) {
                        this.SRV.PostArchiveUpload03(this.KaizenID).subscribe(res => {
                            if (res.Status) {
                                console.log(res);
                            } else {
                                this.showErrMessage(res.Massage);
                            }
                        });
                    } else {
                        this.showErrMessage(res.Massage);
                    }
                });
            } else {
                this.showErrMessage(res.Massage);
            }
        });
    }
    showErrMessage(errBody) {
        this.alerts.error(`${errBody}`);
    }
}
