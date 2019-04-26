import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';
import {NationalityLookupColumns} from "./nationality-lookupColumns";

@Component({
  selector: 'app-nationality-lookup',
  templateUrl: './nationality-lookup.component.html',
  styleUrls: ['./nationality-lookup.component.scss']
})
export class NationalityLookupComponent implements OnInit {
  @Output() getValue = new EventEmitter();
  username: string ;
  public opened: boolean = false;
  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() { }

  openDialog(): void {
    this.LookUpSetting.gridColumns = NationalityLookupColumns.NationalityLookupColumns;
    this.LookUpSetting.ServerFuncName = "GetItemsBySite";
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  Select_Changed(dataItem) {
    this.opened = false;
    this.username = dataItem.NationalityID;
    this.getValue.emit(dataItem);
  }

}











