import { Component, OnInit } from '@angular/core';
import { deboterClassColumns } from '../debtorCalssColumns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
    selector: 'app-maindebtorclass',
    templateUrl: './maindebtorclass.component.html',
    styleUrls: ['./maindebtorclass.component.scss']
})
export class MaindebtorclassComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'CMS/CustClass/GetDataGrid';
        this.Setting.gridColumns = deboterClassColumns.deboterClassColumns;
    }

    ngOnInit() {
    }

}
