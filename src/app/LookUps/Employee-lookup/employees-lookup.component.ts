import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';

import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';
import {EmployeeLookupColumns} from "./employee-lookupColumns";
import {CustomerLookupColumns} from "../Customers-PopUp/customer-lookupColumns";

@Component({
  selector: 'app-employee-lookup',
  templateUrl: './employees-lookup.component.html',
  styleUrls: ['./employees-lookup.component.scss']
})
export class EmployeeLookupComponent implements OnInit {
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
    this.username = dataItem.SupervisorID;
    this.getValue.emit(dataItem);
  }


}












