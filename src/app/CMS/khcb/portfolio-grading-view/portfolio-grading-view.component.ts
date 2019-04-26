import { Component, OnInit, Input } from '@angular/core';
import {PublicShared} from "../../../models/PublicShared";

@Component({
  selector: 'app-portfolio-grading-view',
  templateUrl: './portfolio-grading-view.component.html',
  styleUrls: ['./portfolio-grading-view.component.scss']
})
export class PortfolioGradingViewComponent implements OnInit {
  serviceUrl;
  @Input()
  Client: any;
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
  constructor() {
    this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
  }


  ngOnInit() {
    alert(this.Client.ClientID);
    console.log(this.Client.ClientID);
  }

  ready() { console.log('ready'); }
  viewerToolTipOpening(e: any, args: any) { console.log('viewerToolTipOpening ' + args.toolTip.text); }

}
