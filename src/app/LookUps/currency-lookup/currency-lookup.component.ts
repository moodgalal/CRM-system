import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';
import {CurrencyLookupColumns} from "./currency-lookupColumns";
//import {CmscontractLookupColumns} from "../cmscontract-lookup/cmscontract-lookupColumns";


@Component({
  selector: 'app-currency-lookup',
  templateUrl: './currency-lookup.component.html',
  styleUrls: ['./currency-lookup.component.scss']
})
export class CurrencyLookupComponent implements OnInit {
  @Output() getValue = new EventEmitter();
  username: string ;
  public opened: boolean = false;
  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() {
    console.log('currency');
  }

  openDialog(): void {
    this.LookUpSetting.gridColumns = CurrencyLookupColumns.CurrencyLookupColumns;
    this.LookUpSetting.ServerFuncName = "GetCurrencyPopUp";
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  Select_Changed(dataItem) {
    this.opened = false;
    this.username = dataItem.CurrencyName;
    this.getValue.emit(dataItem);
  }

}












