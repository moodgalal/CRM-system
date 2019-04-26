import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';
import { CmscontractLookupColumns } from './cmscontract-lookupColumns'

@Component({
  selector: 'app-cmscontract-lookup',
  templateUrl: './cmscontract-lookup.component.html',
  styleUrls: ['./cmscontract-lookup.component.scss']
})
export class CMSContractLookupComponent implements OnInit {
  public opened: boolean = false;
  @Output() getValue = new EventEmitter();
  username: string;
  @Input() ClientID: string = null;

  static clientId : string;
  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() {
    //this.LookUpSetting.MainGridFilter = `ClientID='${this.ClientID}'`;
    // console.log(CMSContractLookupComponent.clientId);
  }
  openDialog(): void {
    this.LookUpSetting.gridColumns = CmscontractLookupColumns.CmscontractLookupColumns;
    this.LookUpSetting.ServerFuncName = "GetCMSContractPopUp";
    this.LookUpSetting.MainGridFilter = "ClientID='" + CMSContractLookupComponent.clientId +"'";
    if(this.ClientID != null) {
      CMSContractLookupComponent.clientId = this.ClientID;
    }
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  Select_Changed(dataItem) {
    this.opened = false;
    this.username = dataItem.ContractID;
    this.getValue.emit(dataItem);
  }


}


