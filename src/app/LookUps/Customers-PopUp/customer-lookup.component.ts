import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';
import { CustomerLookupColumns } from './customer-lookupColumns';
@Component({
  selector: 'app-customer-lookup',
  templateUrl: './customer-lookup.component.html',
  styleUrls: ['./customer-lookup.component.scss']
})
export class CustomerLookupComponent implements OnInit {
  @Output() getValue = new EventEmitter();
  username: string ;
  public opened: boolean = false;
  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() { }

  openDialog(): void {
    this.LookUpSetting.gridColumns = CustomerLookupColumns.CustomerLookupColumns;
    this.LookUpSetting.ServerFuncName = "GetAllCustomersPopUp";
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  Select_Changed(dataItem) {
    this.opened = false;
    this.username = dataItem.customerName;
    this.getValue.emit(this.username);
  }

}
