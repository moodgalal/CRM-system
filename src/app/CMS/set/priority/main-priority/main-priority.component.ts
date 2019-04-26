import { Component, OnInit } from '@angular/core';

import { priorityColumns } from '../priority.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-priority',
  templateUrl: './main-priority.component.html',
  styleUrls: ['./main-priority.component.scss']
})
export class MainPriorityComponent implements OnInit {

  constructor(
    private Setting: PublicSetting
  ) {
    PublicShared.MainGridURL = 'CMS/Priorities/GetDataGrid';
    this.Setting.gridColumns = priorityColumns.priorityColumns;
  }

  ngOnInit() {
  }
  goBack() {
      window.history.back();
  }
}
