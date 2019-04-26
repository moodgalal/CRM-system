import { Component, OnInit } from '@angular/core';
import { ColumnTemplate } from "../../../Global/column-model";
import { AgentColumns } from "../agent-columns";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-main-agent',
  templateUrl: './main-agent.component.html',
  styleUrls: ['./main-agent.component.scss']
})
export class MainAgentComponent implements OnInit {

  constructor(public Setting: PublicSetting) {
    PublicShared.MainGridURL = "CMS/Agent/GetDataGrid";
    this.Setting.gridColumns = AgentColumns.agentColumns;


  }

  ngOnInit() {

  }

}
