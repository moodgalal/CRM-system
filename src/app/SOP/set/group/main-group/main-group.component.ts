import { Component, OnInit } from '@angular/core';
import { SOP00011Columns } from '../group.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';

@Component({
  selector: 'app-main-group',
  templateUrl: './main-group.component.html',
  styleUrls: ['./main-group.component.scss']
})
export class MainGroupComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'SOP/SOP00011/GetPageing';
        this.Setting.gridColumns = SOP00011Columns.SOP00011Columns;
    }


  ngOnInit() {
  }

}
