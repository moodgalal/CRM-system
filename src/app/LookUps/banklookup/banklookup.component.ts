import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';
import { banklookupColumns } from "./banklookupColumns";

@Component({
  selector: 'app-banklookup',
  templateUrl: './banklookup.component.html',
  styleUrls: ['./banklookup.component.scss']
})
export class BanklookupComponent implements OnInit {
  @Output() getValue = new EventEmitter();
  BankCode: string;
  public opened: boolean = false;
  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() { }
  openDialog(): void {
    this.LookUpSetting.gridColumns = banklookupColumns.banklookupColumns;
    this.LookUpSetting.ServerFuncName = "GetBankLookUp";
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  Select_Changed(dataItem) {
    this.opened = false;
    this.BankCode = dataItem.BankCode;
    this.getValue.emit(this.BankCode);
  }


}
