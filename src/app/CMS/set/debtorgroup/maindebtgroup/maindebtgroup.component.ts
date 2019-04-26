import { Component, OnInit } from '@angular/core';
import { deboterGroupColumns } from '../debtorGroup.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-maindebtgroup',
  templateUrl: './maindebtgroup.component.html',
  styleUrls: ['./maindebtgroup.component.scss']
})
export class MaindebtgroupComponent implements OnInit {

  constructor(
    private Setting: PublicSetting
  ) {
    PublicShared.MainGridURL = 'CMS/DebtorGroup/GetDataGrid';
    this.Setting.gridColumns = deboterGroupColumns.deboterGroupColumns;
  }

  ngOnInit() {
  }

}
