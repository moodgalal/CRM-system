import { Component, OnInit } from '@angular/core';
import { ReligionColumns } from '../Religion.Columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-religion-main',
  templateUrl: './religion-main.component.html',
  styleUrls: ['./religion-main.component.scss']
})
export class ReligionMainComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'Admin/religion/GetPageing';
        this.Setting.gridColumns = ReligionColumns.ReligionColumns;
    }


  ngOnInit() {
  }

}
