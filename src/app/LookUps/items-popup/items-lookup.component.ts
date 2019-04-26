import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';
import {ItemsLookupColumns} from "./items-lookupColumns";

@Component({
  selector: 'app-items-lookup',
  templateUrl: './items-lookup.component.html',
  styleUrls: ['./items-lookup.component.scss']
})
export class ItemsLookupComponent implements OnInit {
  @Output() getValue = new EventEmitter();
  username: string ;
  public opened: boolean = false;
  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() { }

  openDialog(): void {
    this.LookUpSetting.gridColumns = ItemsLookupColumns.ItemsLookupColumns;
    this.LookUpSetting.ServerFuncName = "GetItems";
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  Select_Changed(dataItem) {
    this.opened = false;
    this.username = dataItem.itemsName;
    this.getValue.emit(dataItem);
  }

}











