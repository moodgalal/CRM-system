import { Component, OnInit } from '@angular/core';
import { PublicSetting, PublicShared } from "../../../models/PublicShared";
import { CompanyService } from "../../../Admin/Company/CompanyService";

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.scss'],
  providers: [CompanyService]
})
export class UserlogComponent implements OnInit {
  CompanyList: Array<any> = [];
  DateFrom: Date = new Date();
  DateTo: Date = new Date();
  UserName;
  CompanyID;
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
  constructor(public setting: PublicSetting, public SharedData: PublicSetting, private service: CompanyService ) {
    this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
  }


  ngOnInit() {
    this.service.FillDropDownList().subscribe((res) => {
      this.CompanyList = res;
    }, (err) => {
      // this.alerts.error(`Try again later please`);
    }) 
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
