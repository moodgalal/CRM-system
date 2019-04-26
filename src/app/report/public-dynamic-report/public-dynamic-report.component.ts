import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-report',
  templateUrl: './public-dynamic-report.component.html',
  styleUrls: ['./public-dynamic-report.component.scss']
})
export class PublicDynamicReportComponent implements OnInit {
  viewerContainerStyle = {
    position: 'absolute',
    top: '37px',
    bottom: '5px',
    width: '100%',
    height: '100vh',
    zIndex: '99999',
    left: '5px',
    right: '5px',
    overflow: 'hidden',
    ['font-family']: 'ms sans serif'
  };

  constructor() { }

  ngOnInit() {
  }

  ready() { console.log('ready'); }
  viewerToolTipOpening(e: any, args: any) { console.log('viewerToolTipOpening ' + args.toolTip.text); }

}
