import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UserColumns } from '../user.columns';
import { PublicSetting, PublicShared } from '../../../models/PublicShared';

@Component({
    selector: 'app-mainusers',
    templateUrl: './mainusers.component.html',
    styleUrls: ['./mainusers.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class MainusersComponent implements OnInit {



    constructor(private Setting: PublicSetting) {
        PublicShared.MainGridURL = 'Admin/User/GetDataListGrid';
        this.Setting.gridColumns = UserColumns.UserColumns;
    }

    ngOnInit() {
        //    this.getGridData()
    }

}
