import { Component, OnInit } from '@angular/core';
import { TargetAgentService } from './targetagent.service';
import { ToastrService } from "ngx-toastr";
import { AgentGroupService } from '../../../CMS/set/agentgroup/agentGroupService';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
  selector: 'app-targetagent',
  templateUrl: './targetagent.component.html',
  styleUrls: ['./targetagent.component.scss'],
  providers: [TargetAgentService, PublicSetting]
})
export class TargetagentComponent implements OnInit {
  YearCode: any = 0;
  TargetList: any[] = [];
  CM00107: any = {};
  CM00107List: any[] = [];
  update: boolean = false;
  targetID: string = "";
  agentId: string = "";
  constructor(
    private service: TargetAgentService,
    private alerts: ToastrService,
    public setting: PublicSetting
  ) { }

  ngOnInit() {
    this.service.GetAllFiscalYears().subscribe((res) => {
      this.setting.YearsList = res;
      this.YearCode = this.setting.YearsList[0];
    });
    this.service.GetTargets().subscribe((res) => {
      this.TargetList = res;
    });
  }
  YearCode_Change(yearCode) {
    this.YearCode = yearCode;
    this.service.GetPeriodsByYearCode(yearCode).subscribe((res) => {
      this.setting.PeriodList = res;
      this.setting.PeriodList.forEach(item => item.TargetClaimAmount = 0);
    });
  }
  onSelectAgent(event) {
    this.agentId = event;
    this.service.GetSalesTargetsCM00107(this.agentId, this.targetID).subscribe((res) => {
      this.setting.PeriodList.forEach(baseList => {
        baseList.TargetClaimAmount = 0;
        baseList.YearCode = this.YearCode;
        baseList.TargetID = this.targetID;
        baseList.AgentID = this.agentId;
        baseList.TargetTypeID = 1;
        res.forEach(resItem => {
          if (baseList.PERIODID == resItem.PERIODID)
            baseList.TargetClaimAmount = resItem.TargetClaimAmount
        });
      });
      //console.log(res);
      //console.log(res.length);
      if (res.length > 0)
        this.update = true;
      else
        this.update = false;
    });
  }
  TargetID_Change(event) {
    this.targetID = event
  }
  onSave() {
    console.log(this.update);
    if (this.update) {
      this.service.UpdateSalesList(this.setting.PeriodList).subscribe(
        (res) => {
          if (res.Status) this.alerts.success(res.Massage)
          else this.alerts.error(res.Massage)
        }, (err) => {
          this.alerts.error('Error please try again later ');
        });
    } else {
      this.service.AddCM00107(this.setting.PeriodList).subscribe(
        (res) => {
          if (res.Status) this.alerts.success(res.Massage)
          else this.alerts.error(res.Massage)
        }, (err) => {
          this.alerts.error('Error please try again later ');
        });
    }
  }
}
