import { Component, OnInit } from '@angular/core';
import { dashreminderService } from "./dashreminderService";
import { CMSShared } from '../../../providers/CMS/CMSShared';
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-dashreminder',
  templateUrl: './dashreminder.component.html',
  styleUrls: ['./dashreminder.component.scss'],
  providers: [dashreminderService]
})
export class DashreminderComponent implements OnInit {
  MainGridFilter;
  IsReminderFilter;
  PTPDataGrid: Array<any> = [];
  PTPTotal: number = 0;
  ReworkDataGrid: Array<any> = [];
  ReworkTotal: number = 0;
  AgentID: string;
  constructor(private service: dashreminderService, public CMSShared: CMSShared) { }
  ngOnInit() {
    if (this.CMSShared.MyAgentList.length > 0) {
      this.LoadData();
    } else {
      this.service.GetMyAgents().subscribe((res) => {
        this.CMSShared.MyAgentList = res;
        if (this.CMSShared.MyAgentList.length > 0) {
          this.AgentID = PublicShared.GetUserData.UserName;//.trim();
          this.LoadData();
        }
      }); 
    }
  }
  LoadData() {
    if (CMSShared.StatusList.length > 0) {
      this.FillControl();
    } else {
      this.service.GetCaseStatusList().subscribe((res) => {
        CMSShared.StatusList = res;
        this.FillControl();
      });
    }
  }
  FillControl() {
    if (this.AgentID == undefined)
      this.AgentID = PublicShared.GetUserData.UserName;//.trim();
    this.MainGridFilter = "";
    this.IsReminderFilter = "";
    CMSShared.StatusList.map(status => {
      if (status.StatusActionTypeID == 1 && status.CaseStatusParent == null) {
        if (status.IsPTP) {
          this.MainGridFilter = this.MainGridFilter + status.CaseStatusID + ",";
        } else {
          if (status.IsReminder) {
            this.IsReminderFilter = this.IsReminderFilter + status.CaseStatusID + ",";
          }
        }
      }
    });
    this.MainGridFilter = this.MainGridFilter.substring(0, this.MainGridFilter.length - 1);
    this.MainGridFilter = "CaseStatusID in(" + this.MainGridFilter + ")"
    this.MainGridFilter = `AgentID='${this.AgentID.trim()}' and ` + this.MainGridFilter;
    this.service.GetDataGrid(0, 10, "", "", "", this.MainGridFilter, "").subscribe((data) => {
      if (data !== null) {
        if (data.Items !== null) {
          this.PTPDataGrid = data.Items;
          this.PTPTotal = data.TotalItemCount;
        }
        else {
          this.PTPDataGrid = [];
          this.PTPTotal = 0;
        }
      }
    }, (err) => { });

    if (this.IsReminderFilter == undefined) return;
    this.IsReminderFilter = this.IsReminderFilter.substring(0, this.IsReminderFilter.length - 1);
    this.IsReminderFilter = "CaseStatusID in (" + this.IsReminderFilter + ")"
    this.IsReminderFilter = `AgentID='${this.AgentID}' and ` + this.IsReminderFilter;
    this.service.GetDataGrid(0, 10, "", "", "", this.IsReminderFilter, "").subscribe((data) => {
      if (data !== null) {
        if (data.Items !== null) {
          this.ReworkDataGrid = data.Items;
          this.ReworkTotal = data.TotalItemCount;
        }
        else {
          this.ReworkDataGrid = [];
          this.ReworkTotal = 0;
        }
      }

    }, (err) => { });
  }
  getValue(val) {
    console.log(val);
  }
}
