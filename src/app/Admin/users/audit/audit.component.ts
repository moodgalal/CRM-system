import { Component, OnInit } from '@angular/core';
import { PublicSetting, PublicShared } from "../../../models/PublicShared";
@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  DateFrom: Date = new Date();
  DateTo: Date = new Date();
  UserName;
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

  constructor(public setting: PublicSetting,public SharedData: PublicSetting) {
    this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
  }

  ngOnInit() {
  }
  User_Change(event) {
    console.log(event);
    this.UserName = event;
  }
  ApplyShowReport() {
    console.log(this.DateFrom);
    this.ShowReport = false;
    setTimeout(() => { // This timer is for testing
      this.ShowReport = true;
    }, 300);
  }
  ready() { console.log('ready'); }
  viewerToolTipOpening(e: any, args: any) { console.log('viewerToolTipOpening ' + args.toolTip.text); }

}
