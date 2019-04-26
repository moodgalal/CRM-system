import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';
import { UsersLookupColumns } from "./users-lookupColumns";

@Component({
  selector: 'app-users-lookup',
  templateUrl: './users-lookup.component.html',
  styleUrls: ['./users-lookup.component.scss']
})
export class UsersLookupComponent implements OnInit {
  @Output() getValue = new EventEmitter();
  @Input() UserName: string;
  public opened: boolean = false;
  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() { }

  openDialog(): void {
    this.LookUpSetting.gridColumns = UsersLookupColumns.UsersLookupColumns;
    this.LookUpSetting.ServerFuncName = "GetUserDataListGrid";
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  Select_Changed(dataItem) {
    this.opened = false;
    this.UserName = dataItem.UserName;
    this.getValue.emit(dataItem);
  }


}












