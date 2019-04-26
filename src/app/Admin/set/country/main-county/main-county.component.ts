import { Component, OnInit } from '@angular/core';
import { CountryColumns } from '../Country.Columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-county',
  templateUrl: './main-county.component.html',
  styleUrls: ['./main-county.component.scss']
})
export class MainCountyComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'Admin/Country/GetPageing';
        this.Setting.gridColumns = CountryColumns.CountryColumns;
    }

  ngOnInit() {
  }

}
