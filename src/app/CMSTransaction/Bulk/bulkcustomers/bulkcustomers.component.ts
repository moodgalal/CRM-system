import { Component, OnInit } from '@angular/core';
import { bulkcustomerService } from './bulkcustomer.service';
import { PublicShared, PublicSetting } from '../../../models/PublicShared';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-bulkcustomers',
    templateUrl: './bulkcustomers.component.html',
    styleUrls: ['./bulkcustomers.component.scss'],
    providers: [bulkcustomerService]
})
export class BulkcustomersComponent implements OnInit {
    KaizenID;
    uploadSaveUrl = `${PublicShared.AppSeverPath}/MasterData/GetExcelColumns`;
    ExcelColumns = [];
    TableName = "";
    dataSourcesTmp = [];
    TRXTypeID;
    FieldList: Array<any> = [];

    constructor(public Setting: PublicSetting, private Server: bulkcustomerService, private alerts: ToastrService) { }

    ngOnInit() {
        this.Server.GetNextBulkCustomerUploadID().subscribe(res => {
            this.KaizenID = res;
        });
        this.dataSourcesTmp = [];
        this.Setting.DataSources.forEach((source: any) => {
            if (source.TableSource.trim() === 'CM00100' && source.ORGTRXTypeID === null) {
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
        this.ExcelColumns.push({ Index: "NULL", ColumnName: "N/A" });
        this.ExcelColumns.push({ Index: "Fixed", ColumnName: "Fixed" });
    }
    dataSrcChange(event) {
        console.log(event);
        this.Server.GetDSColumns(this.TRXTypeID).subscribe(res => {
            this.FieldList = res;
            this.FieldList.forEach((source: any) => {
                source.isSelected = false;
                source.FieldValue = null;
            });
        });
    }
  SaveBulkUpdate() {
      console.log('save ...');
  }
}
