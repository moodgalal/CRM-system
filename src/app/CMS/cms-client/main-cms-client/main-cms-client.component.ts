import { Component, OnInit } from '@angular/core';
import { ColumnTemplate } from "../../../Global/column-model";
import { CmsClientColumns } from '../CmsClient.columns';
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-main-cms-client',
  templateUrl: './main-cms-client.component.html',
  styleUrls: ['./main-cms-client.component.scss']
})
export class MainCmsClientComponent implements OnInit {


    constructor(public Setting: PublicSetting) {
        PublicShared.MainGridURL = "CMS/Client/GetDataGrid";
        this.Setting.gridColumns = CmsClientColumns.CmsClientColumns;


    }

  ngOnInit() {
  }

}
