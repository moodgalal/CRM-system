import { Component, OnInit } from '@angular/core';

import { AccountColumns } from '../account.column';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-mainsmsaccount',
  templateUrl: './mainsmsaccount.component.html',
  styleUrls: ['./mainsmsaccount.component.scss']
})
export class MainsmsaccountComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'SMS/Account/GetPageing';
        this.Setting.gridColumns = AccountColumns.AccountColumns;
    }

  ngOnInit() {
  }

}
