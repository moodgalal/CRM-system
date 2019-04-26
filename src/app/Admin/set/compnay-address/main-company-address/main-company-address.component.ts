import { Component, OnInit } from '@angular/core';
import { CompanyAddressColumns } from '../CompanyAddress.Columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-company-address',
  templateUrl: './main-company-address.component.html',
  styleUrls: ['./main-company-address.component.scss']
})
export class MainCompanyAddressComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'Admin/CompanyAddress/GetPageing';
        this.Setting.gridColumns = CompanyAddressColumns.CompanyAddressColumns;
    }

  ngOnInit() {
  }

}
