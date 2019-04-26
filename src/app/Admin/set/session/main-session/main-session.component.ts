import { Component, OnInit } from '@angular/core';

import { SessionColumns } from '../Session.Columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-session',
  templateUrl: './main-session.component.html',
  styleUrls: ['./main-session.component.scss']
})
export class MainSessionComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'Admin/Session/GetPageing';
        this.Setting.gridColumns = SessionColumns.SessionColumns;
    }

  ngOnInit() {
  }

}
