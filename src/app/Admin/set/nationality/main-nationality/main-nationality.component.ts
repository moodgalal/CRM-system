import { Component, OnInit } from '@angular/core';
import { NationalityColumns } from '../Nationality.Columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-nationality',
  templateUrl: './main-nationality.component.html',
  styleUrls: ['./main-nationality.component.scss']
})
export class MainNationalityComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'Admin/Nationality/GetPageing';
        this.Setting.gridColumns = NationalityColumns.NationalityColumns;
    }

  ngOnInit() {
  }

}
