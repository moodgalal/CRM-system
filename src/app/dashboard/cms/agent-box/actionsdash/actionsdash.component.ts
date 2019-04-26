import { Component, OnInit } from '@angular/core';
import { DashboardagentboxService } from "../DashboardagentboxService";
import { AgentBoxSharedData } from "../AgentBoxSharedData";

@Component({
  selector: 'app-actionsdash',
  templateUrl: './actionsdash.component.html',
  styleUrls: ['./actionsdash.component.scss'],
  providers: [DashboardagentboxService, AgentBoxSharedData]
})
export class ActionsdashComponent implements OnInit {
  IsShowGridOptions: boolean = false;
  constructor(private service: DashboardagentboxService, public AgentBoxSharedData: AgentBoxSharedData) { }

  ngOnInit() {
    this.service.GetAgentDashBoardBoxs().subscribe((res) => {
      this.AgentBoxSharedData.CMV00005 = res;
      console.log(this.AgentBoxSharedData.CMV00005);
    });
  }

}
