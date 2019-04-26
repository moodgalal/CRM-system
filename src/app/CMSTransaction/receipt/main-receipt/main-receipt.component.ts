import { Component, OnInit, ViewChild } from '@angular/core';
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
import { formatDate } from '@telerik/kendo-intl';
import { GlobalGridComponent } from '../../../Global/global-grid/global-grid.component'


@Component({
    selector: 'app-main-receipt',
    templateUrl: './main-receipt.component.html',
    styleUrls: ['./main-receipt.component.scss']
})
export class MainReceiptComponent implements OnInit {
    @ViewChild("grid") grid: GlobalGridComponent;

    FilterObject: any = { StartDate: Date, EndDate: Date };
    constructor(public Setting: PublicSetting) {
        this.FilterObject.StartDate = new Date();
        this.FilterObject.EndDate = new Date();
        this.ApplyFilter(1);
    }

    ngOnInit() {

    }
    ApplyFilter(x) {
        this.Setting.MainGridFilter = '';
        switch (x) {
            case 1:
                //this.Setting.MainGridFilter = `IsApproved=1`
                break;
            case 2:
                this.Setting.MainGridFilter = `IsApproved=1 and`
                break;
            case 3:
                this.Setting.MainGridFilter = `IsApproved=0 and`
                break;
        }
        this.Setting.MainGridFilter += ` (DATEADD(dd,0,DATEDIFF(dd, 0, PaymentDate)) >= DATEADD(dd, 0, DATEDIFF(dd,0,'${formatDate(this.FilterObject.StartDate, "d")}'))`
        this.Setting.MainGridFilter = this.Setting.MainGridFilter + ` and DATEADD(dd,0,DATEDIFF(dd, 0, PaymentDate)) <= DATEADD(dd,0,DATEDIFF(dd, 0,'${formatDate(this.FilterObject.EndDate, "d")}'))) `

        console.log(this.Setting.MainGridFilter);
    }
    Filte_Change(x) {
        this.ApplyFilter(x);
        this.grid.getGridData();
    }
}
