import { Component, OnInit } from '@angular/core';

import { StatusFieldsColumns } from '../StatusFields.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-status-fields',
  templateUrl: './main-status-fields.component.html',
  styleUrls: ['./main-status-fields.component.scss']
})
export class MainStatusFieldsComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'CMS/StatusFields/GetPageing';
        this.Setting.gridColumns = StatusFieldsColumns.StatusFieldsColumns;
    }
  ngOnInit() {
  }

}
