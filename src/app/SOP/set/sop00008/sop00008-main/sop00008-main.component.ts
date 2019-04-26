import { Component, OnInit } from '@angular/core';

import { SOP00008Columns} from '../sop00008.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-sop00008-main',
  templateUrl: './sop00008-main.component.html',
  styleUrls: ['./sop00008-main.component.scss']
})
export class Sop00008MainComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'SOP/SOP00008/GetAllPageing';
        this.Setting.gridColumns = SOP00008Columns.SOP00008Columns;
    }

  ngOnInit() {
  }

}
