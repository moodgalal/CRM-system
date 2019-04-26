import { Component, OnInit } from '@angular/core';
import { GroupColumns } from '../group.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared'
@Component({
  selector: 'app-maingroup',
  templateUrl: './maingroup.component.html',
  styleUrls: ['./maingroup.component.scss']
})
export class MaingroupComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'SMS/Group/GetPageing';
        this.Setting.gridColumns = GroupColumns.GroupColumns;
    }
  ngOnInit() {
  }

}
