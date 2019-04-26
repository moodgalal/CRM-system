import { Component, OnInit } from '@angular/core';
import { DashboardagentboxService } from "../DashboardagentboxService";
import { AgentBoxSharedData } from "../AgentBoxSharedData";
//import { CMSShared } from '../../../../providers/CMS/CMSShared';
@Component({
  selector: 'app-casesdash',
  templateUrl: './casesdash.component.html',
  styleUrls: ['./casesdash.component.scss'],
  providers: [DashboardagentboxService, AgentBoxSharedData]
})
export class CasesdashComponent implements OnInit {

  constructor(private service: DashboardagentboxService, public AgentBoxSharedData: AgentBoxSharedData) { }

  ngOnInit() {
    //if (this.AgentBoxSharedData.CM00314.CaseCount == 0) {
    //  this.service.GetMyAgentTotal().subscribe((res) => {
    //    this.AgentBoxSharedData.CM00314 = res;
    //  });
    //}
  }

}
