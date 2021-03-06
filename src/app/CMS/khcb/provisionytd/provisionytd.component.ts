import { Component, OnInit } from '@angular/core';
import { ProvisionytdService } from "./ProvisionytdService";
import { PublicSetting, PublicShared } from "../../../models/PublicShared";

interface ItemInt {
  text: string,
  value: number
}

@Component({
  selector: 'app-provisionytd',
  templateUrl: './provisionytd.component.html',
  styleUrls: ['./provisionytd.component.scss'],
  providers: [PublicSetting, ProvisionytdService]
})

export class ProvisionytdComponent implements OnInit {

  YearCode;
  ShowReport: boolean = false;
  serviceUrl;
  TRXTypeID;
  public FilterType: Array<ItemInt> = [
    { text: "Finance", value: 37 },
    { text: "Credit Card", value: 40 }
  ];
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
  constructor(private Server: ProvisionytdService, public SharedData: PublicSetting) {
    this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
  }
  ngOnInit() {
    this.Server.GetAllFiscalYears().subscribe((res) => {
      this.SharedData.YearsList = res;
      this.YearCode = this.SharedData.YearsList[0].YearCode;
    })
  }
  ApplyShowReport() {
    console.log(this.YearCode);
    console.log(this.TRXTypeID);
    this.ShowReport = false;
    setTimeout(() => { // This timer is for testing
      this.ShowReport = true;
    }, 300);
  }
  ready() { console.log('ready'); }
  viewerToolTipOpening(e: any, args: any) { console.log('viewerToolTipOpening ' + args.toolTip.text); }
}
