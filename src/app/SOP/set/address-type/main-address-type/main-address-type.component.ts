import { Component, OnInit } from '@angular/core';

import { AddressTypeColumns } from '../address-type.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
  selector: 'app-main-address-type',
  templateUrl: './main-address-type.component.html',
  styleUrls: ['./main-address-type.component.scss']
})
export class MainAddressTypeComponent implements OnInit {

    constructor(
        private Setting: PublicSetting
    ) {
        PublicShared.MainGridURL = 'SOP/AddressType/GetAllPageing';
        this.Setting.gridColumns = AddressTypeColumns.AddressTypeColumns;
    }

  ngOnInit() {
  }

}
