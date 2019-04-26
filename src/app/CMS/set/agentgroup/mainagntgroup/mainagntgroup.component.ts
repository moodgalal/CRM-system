import { Component, OnInit } from '@angular/core';
import { ColumnTemplate } from '../../../../Global/column-model';
import { AgentGroupColumns } from '../AgentGroupColumns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-mainagntgroup',
  templateUrl: './mainagntgroup.component.html',
  styleUrls: ['./mainagntgroup.component.scss']
})
export class MainagntgroupComponent implements OnInit {

    constructor(public Setting: PublicSetting) {
        this.Setting.gridColumns = AgentGroupColumns.AgentGroupColumns;
        PublicShared.MainGridURL = 'CMS/AgentGroup/GetDataGrid';
        console.log(this.Setting.gridColumns);
    }

  ngOnInit() {
  }

}
