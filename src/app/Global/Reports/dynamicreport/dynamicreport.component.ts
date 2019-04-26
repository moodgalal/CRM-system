import { Component, OnInit } from '@angular/core';
import { PublicSetting ,PublicShared } from "../../../models/PublicShared";

@Component({
    selector: 'app-dynamicreport',
    templateUrl: './dynamicreport.component.html',
    styleUrls: ['./dynamicreport.component.scss'],
})
export class DynamicreportComponent implements OnInit {
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
    Smartfilter;
    constructor(public Setting: PublicSetting) {
        //console.log('DynamicreportComponent');
        //console.log(this.Setting.SelectedView.ViewID);
        this.CompanyProfile = PublicShared.GetCompany;
        this.serviceUrl = `${PublicShared.AppSeverPath}/api/reports`;
        this.Smartfilter = this.Setting.SmartfilterObject.FilterServerArray.join();
        console.log(this.Smartfilter);
    }

    ngOnInit() {
    }
    ready() { console.log('ready'); }
    viewerToolTipOpening(e: any, args: any) { console.log('viewerToolTipOpening ' + args.toolTip.text); }

}
