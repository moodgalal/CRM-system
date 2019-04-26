import { Component, OnInit } from '@angular/core';
import { CityColumns } from '../City.Columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-city',
  templateUrl: './main-city.component.html',
  styleUrls: ['./main-city.component.scss']
})
export class MainCityComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'Admin/City/GetPageing';
        this.Setting.gridColumns = CityColumns.CityColumns;
    }

  ngOnInit() {
  }

}
