import { Component, OnInit } from '@angular/core';

import { SOP00014Columns } from '../Status.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-status',
  templateUrl: './main-status.component.html',
  styleUrls: ['./main-status.component.scss']
})
export class MainStatusComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'SOP/Status/GetStatusPageing';
        this.Setting.gridColumns = SOP00014Columns.SOP00014Columns;
    }


  ngOnInit() {
  }

}
