import { Component, OnInit } from '@angular/core';

import { StatusScriptColumns } from '../StatusScript.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-status-script',
  templateUrl: './main-status-script.component.html',
  styleUrls: ['./main-status-script.component.scss']
})
export class MainStatusScriptComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'CMS/StatusScript/GetPageing';
        this.Setting.gridColumns = StatusScriptColumns.StatusScriptColumns;
    }

  ngOnInit() {
  }

}
