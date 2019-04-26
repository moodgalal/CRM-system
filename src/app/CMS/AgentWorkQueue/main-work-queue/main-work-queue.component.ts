import { Component, OnInit } from '@angular/core';
import { ColumnTemplate } from "../../../Global/column-model";
import { AgentWorkQueueColumns } from "../AgentWorkQueueColumns";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-main-work-queue',
  templateUrl: './main-work-queue.component.html',
  styleUrls: ['./main-work-queue.component.scss']
})
export class MainWorkQueueComponent implements OnInit {

  constructor(public Setting: PublicSetting) {
    PublicShared.MainGridURL = "CMS/Agent/GetAgentWorkQueue";
    this.Setting.gridColumns = AgentWorkQueueColumns.AgentWorkQueueColumns;
  }

  ngOnInit() {
  }

}
