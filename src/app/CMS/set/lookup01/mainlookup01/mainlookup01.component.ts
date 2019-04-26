import { Component, OnInit } from '@angular/core';
import { Lookup01Columns } from '../lookup01.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-mainlookup01',
  templateUrl: './mainlookup01.component.html',
  styleUrls: ['./mainlookup01.component.scss']
})
export class Mainlookup01Component implements OnInit {

  constructor(
    private Setting: PublicSetting
  ) {
    PublicShared.MainGridURL = 'CMS/lookup01/GetDataGrid';
    this.Setting.gridColumns = Lookup01Columns.Lookup01Columns;
  }

  ngOnInit() {
  }

}
