import { Component, OnInit } from '@angular/core';
import { rmsptpagentService } from "./rmsptpagentService";
import { PublicSetting, PublicShared } from "../../../models/PublicShared";
@Component({
  selector: 'app-rmsptpagent',
  templateUrl: './rmsptpagent.component.html',
  styleUrls: ['./rmsptpagent.component.scss'],
  providers: [PublicSetting, rmsptpagentService]
})
export class RmsptpagentComponent implements OnInit {
  YearCode;
  PERIODID;
  AgentID;
  ShowReport: boolean = false;
  serviceUrl;
  viewerContainerStyle = {
    position: 'absolute',
    top: '37px',
    bottom: '5px',
    width: '100%',
    height: '100vh',
    zIndex: '10',
    left: '5px',
    right: '5px',
    overflow: 'hidden',
    ['font-family']: 'ms sans serif'
  };
  constructor(private Server: rmsptpagentService, public SharedData: PublicSetting) {
    this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
  }

  ngOnInit() {

    this.Server.GetAllFiscalYears().subscribe((res) => {
      this.SharedData.YearsList = res;
      this.YearCode = this.SharedData.YearsList[0].YearCode;
      this.YearCode_Change(this.YearCode);
    })
  }
  YearCode_Change(event) {
    this.Server.GetPeriodsByYearCode(event).subscribe((res) => {
      this.SharedData.PeriodList = res;
      this.PERIODID = res[0].PERIODID;
    })
  }
  Agent_Change(event) {
    this.AgentID = event;
  }
  ApplyShowReport() {
    this.ShowReport = false;
    setTimeout(() => { // This timer is for testing
      this.ShowReport = true;
    }, 300);
  }
  ready() { console.log('ready'); }
  viewerToolTipOpening(e: any, args: any) { console.log('viewerToolTipOpening ' + args.toolTip.text); }
}
