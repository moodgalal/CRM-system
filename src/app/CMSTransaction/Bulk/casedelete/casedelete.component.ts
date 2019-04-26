import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { CMSService } from '../../../providers/CMS/Transations.service';
import { PublicShared } from '../../../models/PublicShared';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { PublicSetting } from "../../../models/PublicShared";
@Component({
    selector: 'app-casedelete',
    templateUrl: './casedelete.component.html',
    styleUrls: ['./casedelete.component.scss'],
    providers: [CMSService]
})
export class CasedeleteComponent implements OnInit {
    KaizenID;
    uploadSaveUrl = `${PublicShared.AppSeverPath}/MasterData/GetExcelColumns`;
    ExcelColumns = [];
    TableName = "";
    isChecked = true;
    ClientID = "";
    TRXTypeID;
    dataSourcesTmp: Array<any> = [];
    SelectedCaseAccountNo = "";
    constructor(public Setting: PublicSetting,private SRV: CMSService) { }
    ngOnInit() {
        //this.Setting.IsGrid = false;
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
        console.log(e);
        this.ExcelColumns = e.response.json().ExcelColumns;
        this.TableName = e.response.json().TableName;
    }
    DeleteBulk() {
        if (this.isChecked) {
            this.ClientID = "";
        }
        this.SRV.DeleteUpload(this.ClientID, this.KaizenID, this.TRXTypeID, this.SelectedCaseAccountNo, this.TableName).subscribe(res => {
            console.log(res);
            if (res.Status) {
                //this.ShowNextField();
            } else {
                alert(res.Massage);
            }
        });
    }
}
