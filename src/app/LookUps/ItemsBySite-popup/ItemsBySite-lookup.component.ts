import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';
import {ItemsBySiteLookupColumns} from "./itemsBySite-lookupColumns";


@Component({
  selector: 'app-ItemsBySite-lookup',
  templateUrl: './ItemsBySite-lookup.component.html',
  styleUrls: ['./ItemsBySite-lookup.component.scss']
})
export class ItemsBySiteLookupComponent implements OnInit {
  @Output() getValue = new EventEmitter();
  username: string;
  public opened: boolean = false;
  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() { }

  openDialog(): void {
    this.LookUpSetting.gridColumns = ItemsBySiteLookupColumns.ItemsBySiteLookupColumns;
    this.LookUpSetting.ServerFuncName = "GetItemsBySite";
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  Select_Changed(dataItem) {
    this.opened = false;
    this.username = dataItem.ItemsBySiteServiceName;
    this.getValue.emit(dataItem);
  }

}
