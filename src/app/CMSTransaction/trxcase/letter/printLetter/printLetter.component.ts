import { Component, OnInit, Input } from '@angular/core';
import {LetterTypeService} from '../../../../CMS/Letter/LetterType/LetterTypeService';
import { PublicSetting, PublicShared } from "../../../../models/PublicShared";


@Component({
  selector: 'app-print-letter',
  templateUrl: './printLetter.component.html',
  styleUrls: ['./printLetter.component.scss'],
  providers: [LetterTypeService, PublicSetting]
})
export class PrintLetterComponent implements OnInit {
  @Input() CaseMain: any;
  templateMenu: any[] = [];
  TemplateContant;
  selectedTemplate: any;
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
  constructor(private letterType: LetterTypeService, public SharedData: PublicSetting) {
    this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
  }

  ngOnInit() {

      this.letterType.GetTemplates(this.CaseMain.TRXTypeID).subscribe(res => {
          console.log(res);
          this.templateMenu = res;

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

   goBack()
   {
    window.history.back();
  }
}
