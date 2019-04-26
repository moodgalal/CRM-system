import { Component, OnInit } from '@angular/core';
import { rmsproductService } from "./rmsproductService";
import { PublicSetting, PublicShared } from "../../../models/PublicShared";


@Component({
  selector: 'app-rmsproduct',
  templateUrl: './rmsproduct.component.html',
  styleUrls: ['./rmsproduct.component.scss'],
  providers: [PublicSetting, rmsproductService]
})
export class RmsproductComponent implements OnInit {
  YearCode: any;
  Client: any;
  PERIODID;
  ClientList: Array<any> = null;
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
  constructor(private Server: rmsproductService, public SharedData: PublicSetting) {
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
