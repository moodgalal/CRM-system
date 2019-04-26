import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AgentWorkQueueService } from "../AgentWorkQueueService";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AgentGroupService } from '../../../CMS/set/agentgroup/agentGroupService';
import { PublicSetting } from "../../../models/PublicShared";

@Component({
  selector: 'app-creatwork-queue',
  templateUrl: './creatwork-queue.component.html',
  styleUrls: ['./creatwork-queue.component.scss'],
  providers: [AgentWorkQueueService, AgentGroupService]
})
export class CreatworkQueueComponent implements OnInit {
  agentGroupData: any;
  CalendarsList = [];
  CM00105: any = {};
  constructor(public setting: PublicSetting, private activatedRoute: ActivatedRoute,
    private service: AgentWorkQueueService,
    private agentgroupService: AgentGroupService,
    private alerts: ToastrService,
  ) { }

  ngOnInit() {
    this.service.getAgentGroup().subscribe((res) => {
      this.agentGroupData = res;
    }, (err) => { console.log(err); }
    );
    this.service.GetAllCalendars().subscribe((res) => {
      this.CalendarsList = res;
    }, (err) => { console.log(err); }
    );
  }
  SaveData() {
    this.service.SaveData(this.CM00105).subscribe((res) => {
      if (res.Status)
        this.alerts.success(res.Massage);
      else
        this.alerts.error(res.Massage);
    }, (err) => { this.alerts.error(`Try again later please`); })
  }
  setAgentId(event) {
    this.CM00105.SupervisorID = event;
  }
}
