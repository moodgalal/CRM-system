import { Component, OnInit } from '@angular/core';
import { rmscollectstageService } from "./rmscollectstageService";
import { PublicSetting, PublicShared } from "../../../models/PublicShared";


@Component({
  selector: 'app-rmscollectstage',
  templateUrl: './rmscollectstage.component.html',
  styleUrls: ['./rmscollectstage.component.scss'],
  providers: [PublicSetting, rmscollectstageService]
})
export class RmscollectstageComponent implements OnInit {

  YearCode: any;
  Lookup01;
  PERIODID;
  Lookup01List: Array<any> = null;
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
  constructor(private Server: rmscollectstageService, public SharedData: PublicSetting) {
    this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
  }

  ngOnInit() {

    this.Server.GetAllFiscalYears().subscribe((res) => {
      this.SharedData.YearsList = res;
      this.YearCode = this.SharedData.YearsList[0];
      this.YearCode_Change(this.YearCode);
    })
    this.Server.GetAllLookup01().subscribe((res) => {
      this.Lookup01List = res;
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
    // console.log(this.Client.ClientID);
    //  alert(this.Client.ClientID);
    setTimeout(() => { // This timer is for testing
      this.ShowReport = true;
    }, 300);
  }

  ready() { console.log('ready'); }
  viewerToolTipOpening(e: any, args: any) { console.log('viewerToolTipOpening ' + args.toolTip.text); }

}
