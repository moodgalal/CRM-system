import { Component, OnInit } from '@angular/core';
import { TemplateColumns } from '../template.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared'
@Component({
  selector: 'app-mainsmstemplate',
  templateUrl: './mainsmstemplate.component.html',
  styleUrls: ['./mainsmstemplate.component.scss']
})
export class MainsmstemplateComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'SMS/Template/GetPageing';
        this.Setting.gridColumns = TemplateColumns.TemplateColumns;
    }
  ngOnInit() {
  }

}
