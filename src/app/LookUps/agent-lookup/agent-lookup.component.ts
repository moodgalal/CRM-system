import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';

import {AgentLookupColumns} from "./agent-lookupColumns";

@Component({
  selector: 'app-agent-lookup',
  templateUrl: './agent-lookup.component.html',
  styleUrls: ['./agent-lookup.component.scss']
})
export class AgentLookupComponent implements OnInit {
  @Output() getValue = new EventEmitter();
  @Input() AgentID: string;
  public opened: boolean = false;

  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() {
    this.AgentID = this.AgentID;
  }
  openDialog(): void {
    this.LookUpSetting.gridColumns = AgentLookupColumns.AgentLookupColumns;
    this.LookUpSetting.ServerFuncName = "GetAgentPopUp";
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  Select_Changed(dataItem) {
    this.opened = false;
    this.AgentID = dataItem.AgentID;
    this.getValue.emit(this.AgentID);
  }

}
