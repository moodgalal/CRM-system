import { Component, OnInit } from '@angular/core';
import { Khcb_collectionYTDService } from "./Khcb_collectionYTDService";
import { PublicSetting, PublicShared } from "../../../models/PublicShared";

@Component({
  selector: 'app-khcb-collectionYTD',
  templateUrl: './khcb_collectionYTD.component.html',
  styleUrls: ['./khcb_collectionYTD.component.scss'],
  providers: [PublicSetting, Khcb_collectionYTDService]
})
export class Khcb_collectionYTDComponent implements OnInit {
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
  constructor(private Server: Khcb_collectionYTDService, public SharedData: PublicSetting) {
    this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
  }

  ngOnInit() {
    this.Server.GetAllFiscalYears().subscribe((res) => {
      this.SharedData.YearsList = res;
      this.YearCode = this.SharedData.YearsList[0];
    })
  }
  YearCode_Change(event) {

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
