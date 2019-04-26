import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';
import { CaselookupColumns } from './CaselookupColumns';

@Component({
    selector: 'app-caselookup',
    templateUrl: './caselookup.component.html',
    styleUrls: ['./caselookup.component.scss']
})
export class CaselookupComponent implements OnInit {
  @Output() getValue = new EventEmitter();
  username: string;
  public opened: boolean = false;

  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() { }

  openDialog(): void {
    this.LookUpSetting.gridColumns = CaselookupColumns.CaselookupColumns;
    this.LookUpSetting.ServerFuncName = "GetCaseLookUp";
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  Select_Changed(dataItem) {
    this.opened = false;
    this.username = dataItem.CaseRef;
    this.getValue.emit(dataItem);
  }

}
