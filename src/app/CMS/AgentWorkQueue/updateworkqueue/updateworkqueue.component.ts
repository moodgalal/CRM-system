import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AgentWorkQueueService } from "../AgentWorkQueueService";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AgentGroupService } from '../../../CMS/set/agentgroup/agentGroupService';
import { PublicSetting } from "../../../models/PublicShared";

@Component({
  selector: 'app-updateworkqueue',
  templateUrl: './updateworkqueue.component.html',
  styleUrls: ['./updateworkqueue.component.scss'],
  providers: [AgentWorkQueueService, AgentGroupService]
})
export class UpdateworkqueueComponent implements OnInit {
  CM00105: any = {};
  agentGroupData: any;
  CalendarsList = [];
  handler: any;
  constructor(public setting: PublicSetting, private activatedRoute: ActivatedRoute,
    private service: AgentWorkQueueService,
    private agentgroupService: AgentGroupService,
    private alerts: ToastrService) { }


  ngOnInit() {
    this.service.getAgentGroup().subscribe(
      (res) => {
        this.agentGroupData = res;
      }, (err) => { console.log(err); }
    );
    this.service.GetAllCalendars().subscribe((res) => {
      this.CalendarsList = res;
    }, (err) => { console.log(err); }
    );
    this.handler = this.activatedRoute.params.subscribe((res) => {
      this.GetSingle(res['id']);
    });
  }
  GetSingle(AgentID) {
    this.service.GetSingle(AgentID)
      .subscribe((res) => {
        this.CM00105 = res;
        console.log(res.PhotoExtension);
        if (res.PhotoExtension == null)
          res.PhotoExtension = 'avatar.jpg';
        else
          res.PhotoExtension = res.AgentID.trim() + '.jpg';

        console.log(res.PhotoExtension == null);
        console.log(res.PhotoExtension == undefined);
        console.log(this.CM00105);
      }, (err) => { console.log(err); })
  }

  SaveData() {

    this.CM00105.PhotoExtension = '.jpg';

    this.service.UpdateData(this.CM00105).subscribe((res) => {
      if (res.Status)
        this.alerts.success(res.Massage);
      else
        this.alerts.error(res.Massage);
    }, (err) => { this.alerts.error(`Try again later please`); })
  }

  DeleteData() {
    this.service.DeleteData(this.CM00105.AgentID)
      .subscribe((res) => {
        if (res.Status)
          this.alerts.success(res.Massage);
        else
          this.alerts.error(res.Massage);
      }, (err) => {
        this.alerts.error(`Try again later please`);
      })
  }
  AgentID_Changed(event) {
    this.CM00105.SupervisorID = event;
  }
}
