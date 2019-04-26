import { Component, OnInit } from '@angular/core';
import { debtorAddressColumns } from '../debtorAddressColumns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-maindetraddress',
  templateUrl: './maindetraddress.component.html',
  styleUrls: ['./maindetraddress.component.scss']
})
export class MaindetraddressComponent implements OnInit {

  constructor(private Setting: PublicSetting) {
    PublicShared.MainGridURL = 'CMS/DebtorAddress/GetDataGrid';
    this.Setting.gridColumns = debtorAddressColumns.debtorAddressColumns;
   }

  ngOnInit() {
  }

}
