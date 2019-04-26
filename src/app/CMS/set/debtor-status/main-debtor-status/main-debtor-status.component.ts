import { Component, OnInit } from '@angular/core';
import { ColumnTemplate } from '../../../../Global/column-model';
import { deboterStatusColumns } from '../deboterStatusColumns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-debtor-status',
  templateUrl: './main-debtor-status.component.html',
  styleUrls: ['./main-debtor-status.component.scss']
})
export class MainDebtorStatusComponent implements OnInit {

  constructor(public Setting: PublicSetting) {
    PublicShared.MainGridURL = 'CMS/Debtorstatus/GetDataGrid';
    this.Setting.gridColumns = deboterStatusColumns.deboterStatusColumns;
   }

  ngOnInit() {
  }

}
