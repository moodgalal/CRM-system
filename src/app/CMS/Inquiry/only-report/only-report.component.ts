import { Component, OnInit } from '@angular/core';
import { PublicSetting, PublicShared } from "../../../models/PublicShared";
@Component({
  selector: 'app-only-report',
  templateUrl: './only-report.component.html',
  styleUrls: ['./only-report.component.scss']
})
export class OnlyReportComponent implements OnInit {
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
  CompanyProfile;
  serviceUrl;
  constructor(public Setting: PublicSetting) {
    //console.log('DynamicreportComponent');
    //console.log(this.Setting.SelectedView.ViewID);
    //this.CompanyProfile = PublicShared.GetCompany;
    this.serviceUrl = `${PublicShared.AppSeverPath}/api/reports`;
  }

  ngOnInit() {
  }
  ready() { console.log('ready'); }
  viewerToolTipOpening(e: any, args: any) { console.log('viewerToolTipOpening ' + args.toolTip.text); }

}
