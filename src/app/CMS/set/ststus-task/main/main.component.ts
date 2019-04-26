import { Component, OnInit } from '@angular/core';

import { StatusTaskColumns } from '../StatusTask.Columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'CMS/StatusTask/GetPageing';
        this.Setting.gridColumns = StatusTaskColumns.StatusTaskColumns;
    }
  ngOnInit() {
  }

}
