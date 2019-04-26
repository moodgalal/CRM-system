import { Component, OnInit } from '@angular/core';
import { CMSService } from '../../providers/CMS/Transations.service';
import { PublicShared } from '../../models/PublicShared';
import { SuccessEvent } from '@progress/kendo-angular-upload';

@Component({
    selector: 'app-bulk-case-modify',
    templateUrl: './bulk-case-modify.component.html',
    styleUrls: ['./bulk-case-modify.component.scss'],
    providers: [CMSService]
})
export class BulkCaseModifyComponent implements OnInit {
    TransiactionNumber;
    uploadSaveUrl = `${PublicShared.AppSeverPath}/MasterData/GetExcelColumns`;
    ExcelColumns = [];
    TableName = "";
    dataSourcesTmp = [];
    CaseFieldList: Array<any> = [];
    SelectedDataSource;
    isChecked = true;
  constructor(private SRV: CMSService) { }

    ngOnInit() {
        this.SRV.GetNextBulkUpdateID().subscribe(res => {
            this.TransiactionNumber = res;
        });
        if (PublicShared.DataSources.length > 0) {
            PublicShared.DataSources.forEach((source: any) => {
                if (source.TableSource.trim() === 'CM00203' && source.ORGTRXTypeID ===null) {
                    this.dataSourcesTmp.push(source);
                }
            });
        }
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
        this.SRV.GetAllOVerridableFields(this.SelectedDataSource).subscribe(res => {
            this.CaseFieldList = res;
            this.CaseFieldList.forEach((source: any) => {
              console.log(source);
                source.isSelected = false;
                source.FieldValue = null;
            });
        });
    }

  goBack() {
    window.history.back();
  }
  getValue(event) {
    console.log(event);
  }

}
