import {Component, OnInit, OnDestroy,ViewEncapsulation} from '@angular/core';
import {AgentService} from "../AgentService";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
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
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AgentService, AgentGroupService]
})
export class UpdateAgentComponent implements OnInit, OnDestroy {

  handler: any;
  CM00105: any = {};
  agentID: any;
  agentGroupData: any;
  CalendarsList = [];
  SelectSuffix: any = {};
  SelectedGender: any = {};
  constructor(public setting: PublicSetting,private activatedRoute: ActivatedRoute,
    private service: AgentService,
    private agentgroupService: AgentGroupService,
    private alerts: ToastrService) { }

  public SuffixList: Array<Item> = [
    { text: "Dr        ", value: "Dr        " },
    { text: "Mr        ", value: "Mr        " },
    { text: "Mrs       ", value: "Mrs       " },
    { text: "Ms        ", value: "Ms        " },
    { text: "Sr.       ", value: "Sr.       " }
  ];
  public Sys00011: Array<ItemInt> = [
    { text: "Male", value: 1},
    { text: "Female", value: 2 },
    { text: "N/A", value: 3 }
  ];
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
        this.agentID = res['id'];
    });
  }
  OnAgentGroupchange(obj) {
    console.log(obj);
    //this.CM00105.AgentGroup = obj.AgentGroup;
  }
  ngOnDestroy() {
    this.handler.unsubscribe();
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
  delete() {
      this.service.DeleteData(this.agentID).subscribe(
          (res) => {
              if (res.Status)
                  this.alerts.success(res.Massage);
              else
                  this.alerts.error(res.Massage);
          }, (err) => { this.alerts.error(`Try again later please`); });
  }
  SaveData() {
     
          this.CM00105.PhotoExtension = '.jpg';
    
    this.service.UpdateData(this.CM00105).subscribe((res) => {
        if (res.Status)
          this.alerts.success(res.Massage);
        else
          this.alerts.error(res.Massage);
      }, (err) => {this.alerts.error(`Try again later please`);})
  }

  deleteAgent() {
    this.service.DeleteData(this.CM00105.AgentID)
      .subscribe((res) => {
        this.alerts.success(`Deleted Successfully`);
      }, (err) => {
        this.alerts.error(`Try again later please`);
      })
  }
  setAgentId(event) {
    this.CM00105.SupervisorID = event;
  }
  User_Change(event) {
    console.log(event);
    this.CM00105.AgentID = event;
  }
}
