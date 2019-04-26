import { Component, OnInit } from '@angular/core';
import { PortfolioGradingMonthService } from "./PortfolioGradingMonthService";
import { PublicSetting, PublicShared } from "../../../models/PublicShared";

@Component({
  selector: 'app-portfolio-gradingmonth',
  templateUrl: './portfolio-gradingmonth.component.html',
  styleUrls: ['./portfolio-gradingmonth.component.scss'],
  providers: [PublicSetting, PortfolioGradingMonthService]
})
export class PortfolioGradingmonthComponent implements OnInit {
  YearCode: any;
  ClientList: Array<any> = null;
  ContractList: Array<any> = null;
  Client: any;
  ShowReport: boolean = false;
  serviceUrl;
  PERIODID;
  IsSummery: boolean = false;

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
  constructor(private Server: PortfolioGradingMonthService, public SharedData: PublicSetting) {
    this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
  }

  ngOnInit() {
    this.Server.GetAllFiscalYears().subscribe((res) => {
      this.SharedData.YearsList = res;
      this.YearCode = this.SharedData.YearsList[0];
      this.YearCode_Change(this.YearCode);
    })
    this.Server.GetAllClient().subscribe((res) => {
      this.ClientList = res;
    })
  }
  YearCode_Change(event) {
    this.Server.GetPeriodsByYearCode(event.YearCode).subscribe((res) => {
      this.SharedData.PeriodList = res;
      this.PERIODID = res[0].PERIODID;
    })
  }
  ShowSummery() {
    this.ShowReport = false;
    this.IsSummery = !this.IsSummery;
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
