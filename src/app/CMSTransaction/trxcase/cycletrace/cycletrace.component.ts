import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PublicSetting, PublicShared } from "../../../models/PublicShared";
import { CMSShared } from '../../../providers/CMS/CMSShared';
import { TrxCaseService } from '../trxCase.service';

@Component({
    selector: 'app-cycletrace',
    templateUrl: './cycletrace.component.html',
    styleUrls: ['./cycletrace.component.scss'],
    providers: [TrxCaseService]
})
export class CycletraceComponent implements OnInit {

  @Input() CaseMain: any;
  ShowReport: boolean = false;
  serviceUrl;

  viewerContainerStyle = {
    position: 'relative',
    top: '0',
    bottom: '0',
    width: '100%',
    height: '100vh',
    zIndex: '10',
    left: '5px',
    right: '5px',
    overflow: 'hidden',
    ['font-family']: 'ms sans serif'
  };


    @Output('cycletrace_Change_Fire') hideMe = new EventEmitter();

    constructor(public Setting: PublicSetting, public CMSShared: CMSShared, private TrxCaseService: TrxCaseService) {

      this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
      this.ApplyShowReport();
    }
    ngOnInit() {

    }
    Payment_Closing() {
        this.hideMe.emit(true);
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
