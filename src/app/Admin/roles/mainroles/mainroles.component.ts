import { Component, OnInit } from '@angular/core';
import { RoleColumns } from '../role.columns';
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-mainroles',
  templateUrl: './mainroles.component.html',
  styleUrls: ['./mainroles.component.scss']
})
export class MainrolesComponent implements OnInit {

    constructor(private Setting: PublicSetting) {
        PublicShared.MainGridURL = 'Admin/Roles/GetDataListGrid';
        this.Setting.gridColumns = RoleColumns.RoleColumns;
    }

  ngOnInit() {
  }

}
