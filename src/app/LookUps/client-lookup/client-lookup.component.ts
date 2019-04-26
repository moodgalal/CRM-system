import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';
import { clientlookupColumns } from './client-lookupColumns';
@Component({
  selector: 'app-client-lookup',
  templateUrl: './client-lookup.component.html',
  styleUrls: ['./client-lookup.component.scss']
})
export class ClientLookupComponent implements OnInit {
  public opened: boolean = false;
  @Output() getValue : EventEmitter<any> = new EventEmitter();
  username: string;

  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() { }

  openDialog(): void {
    this.LookUpSetting.gridColumns = clientlookupColumns.clientlookupColumns;
    this.LookUpSetting.ServerFuncName = "GetClientPopUp";
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  Select_Changed(dataItem) {
    this.opened = false;
    this.username = dataItem.ClientName;
    this.getValue.emit(dataItem);
  }

}
