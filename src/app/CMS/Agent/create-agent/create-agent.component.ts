import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AgentService } from "../AgentService";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AgentGroupService } from '../../../CMS/set/agentgroup/agentGroupService';
import { PublicSetting } from "../../../models/PublicShared";
interface Item {
    text: string,
    value: string
}
interface ItemInt {
    text: string,
    value: number
}
@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AgentService, AgentGroupService]
})
export class CreateAgentComponent implements OnInit {
    testData = ['x', 'y'];
    handler: any;
    CM00105: any = {};
    agentGroupData: any;
    CalendarsList = [];
    SelectSuffix: any = {};
    SelectedGender: any = {};
    constructor(public setting: PublicSetting, private activatedRoute: ActivatedRoute,
        private service: AgentService,
        private agentgroupService: AgentGroupService,
        private alerts: ToastrService,
    ) {  }
  public SuffixList: Array<Item> = [
      { text: "Dr        ", value: "Dr        " },
      { text: "Mr        ", value: "Mr        " },
      { text: "Mrs       ", value: "Mrs       " },
      { text: "Ms        ", value: "Ms        " },
      { text: "Sr.       ", value: "Sr.       " }
  ];
  public Sys00011: Array<ItemInt> = [
      { text: "Male", value: 1 },
      { text: "Female", value: 2 },
      { text: "N/A", value: 3 }
  ];
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
    console.log(this.CM00105);
    this.service.SaveData(this.CM00105).subscribe((res) => {
      if (res.Status)
        this.alerts.success(res.Massage);
      else
        this.alerts.error(res.Description);
    }, (err) => { this.alerts.error(`Try again later please`); })
  }
  User_Change(event) {
    this.CM00105.AgentID = event.UserName;
    this.CM00105.UserCode = event.UserName;
  }
  setAgentId(event) {
    this.CM00105.SupervisorID = event;
  }
}
