import { Component, OnInit } from '@angular/core';
import { PortfolioGradingService } from "./PortfolioGradingService";
import { PublicSetting, PublicShared } from "../../../models/PublicShared";

@Component({
  selector: 'app-portfolio-grading',
  templateUrl: './portfolio-grading.component.html',
  styleUrls: ['./portfolio-grading.component.scss'],
  providers: [PublicSetting, PortfolioGradingService]

})
export class PortfolioGradingComponent implements OnInit {

  YearCode: any;
  ClientList: Array<any> = null;
  ContractList: Array<any> = null;
  Client: any;
  ShowReport: boolean = false;
  serviceUrl;
  ContractID: string;

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

  constructor(private Server: PortfolioGradingService, public SharedData: PublicSetting) {
    this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
  }

  ngOnInit() {

    this.Server.GetAllFiscalYears().subscribe((res) => {
      this.SharedData.YearsList = res;
      this.YearCode = this.SharedData.YearsList[0];
    })
    this.Server.GetAllClient().subscribe((res) => {
      this.ClientList = res;
    })

  }
  //GetAllByClientID() {
  //  this.Server.GetAllByClientID(this.Client.ClientID).subscribe((res) => {
  //    this.ContractList = res;
  //    this.YearCode = this.SharedData.YearsList[0];
  //  })
  //}
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
