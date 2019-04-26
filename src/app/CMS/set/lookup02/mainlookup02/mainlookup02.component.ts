import { Component, OnInit } from '@angular/core';

import { Lookup02Columns } from '../lookup02.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-mainlookup02',
  templateUrl: './mainlookup02.component.html',
  styleUrls: ['./mainlookup02.component.scss']
})
export class Mainlookup02Component implements OnInit {

  constructor(
    private Setting: PublicSetting
  ) {
    PublicShared.MainGridURL = 'CMS/lookup02/GetDataGrid';
    this.Setting.gridColumns = Lookup02Columns.Lookup02Columns;
  }
  ngOnInit() {
  }

}
