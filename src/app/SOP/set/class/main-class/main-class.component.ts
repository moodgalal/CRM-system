import { Component, OnInit } from '@angular/core';

import { ClassColumns } from '../Class.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-class',
  templateUrl: './main-class.component.html',
  styleUrls: ['./main-class.component.scss']
})
export class MainClassComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'SOP/class/GetclassPageing';
        this.Setting.gridColumns = ClassColumns.ClassColumns;
    }

  ngOnInit() {
  }

}
