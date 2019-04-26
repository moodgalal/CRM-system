import { Component, OnInit } from '@angular/core';
import { AgentbystatusService } from "./AgentbystatusService";
import { CMSShared } from '../../../providers/CMS/CMSShared';
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-agentbystatus',
  templateUrl: './agentbystatus.component.html',
  styleUrls: ['./agentbystatus.component.scss'],
  providers: [AgentbystatusService]
})
export class AgentbystatusComponent implements OnInit {
  CMV00002List: Array<any> = [];
  AgentID: string;
  constructor(private service: AgentbystatusService, public CMSShared: CMSShared) { }

  ngOnInit() {
    this.LoadData();
  }
  LoadData() {
    if (this.AgentID == undefined)
      this.AgentID = PublicShared.GetUserData.UserName;//.trim();
    this.service.GetStatusByAgentID(this.AgentID).subscribe((data) => {
      this.CMV00002List = data;
      this.CMV00002List.map(status => {

        status.ClaimAmount = parseFloat(status.ClaimAmount).toFixed(3);
        status.TotalCallactedAMT = parseFloat(status.TotalCallactedAMT).toFixed(3);
      });
      if (this.AgentID == undefined)
        this.AgentID = PublicShared.GetUserData.UserName;//.trim();
    }, (err) => { });
  }
}
