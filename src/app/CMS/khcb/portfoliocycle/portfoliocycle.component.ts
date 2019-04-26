import { Component, OnInit } from '@angular/core';
import { PortfolioCycleService } from "./PortfolioCycleService";
import { PublicSetting, PublicShared } from "../../../models/PublicShared";
@Component({
  selector: 'app-portfoliocycle',
  templateUrl: './portfoliocycle.component.html',
  styleUrls: ['./portfoliocycle.component.scss'],
  providers: [PublicSetting, PortfolioCycleService]
})
export class PortfoliocycleComponent implements OnInit {
  YearCode: any;
  ShowReport: boolean = false;
  serviceUrl;
  PERIODID;
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

  constructor(private Server: PortfolioCycleService, public SharedData: PublicSetting) {
  this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
 }

  ngOnInit() {
    this.Server.GetAllFiscalYears().subscribe((res) => {
      this.SharedData.YearsList = res;
      this.YearCode = this.SharedData.YearsList[0];
      this.YearCode_Change(this.YearCode);
    })
  }
  YearCode_Change(event) {
    this.Server.GetPeriodsByYearCode(event.YearCode).subscribe((res) => {
      this.SharedData.PeriodList = res;
      this.PERIODID = res[0].PERIODID;
    })
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
