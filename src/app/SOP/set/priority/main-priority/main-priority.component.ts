import { Component, OnInit } from '@angular/core';


import { SOP00012Columns } from '../priority.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-priority',
  templateUrl: './main-priority.component.html',
  styleUrls: ['./main-priority.component.scss']
})
export class SOPMainPriorityComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'SOP/Priority/GetAllPageing';
        this.Setting.gridColumns = SOP00012Columns.SOP00012Columns;
    }

  ngOnInit() {
  }

}
