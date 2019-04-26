import { Component, OnInit } from '@angular/core';
import { ReceiverColumns } from '../reeceviers.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared'
@Component({
  selector: 'app-mainreciever',
  templateUrl: './mainreciever.component.html',
  styleUrls: ['./mainreciever.component.scss']
})
export class MainrecieverComponent implements OnInit {
    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'SMS/Receivers/GetPageing';
        this.Setting.gridColumns = ReceiverColumns.ReceiverColumns;
    }
  ngOnInit() {
  }

}
