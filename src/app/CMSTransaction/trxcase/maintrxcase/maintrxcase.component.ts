import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { PublicSetting } from "../../../models/PublicShared";
import { TrxCaseService } from '../trxCase.service';
@Component({
    selector: 'app-maintrxcase',
    templateUrl: './maintrxcase.component.html',
    styleUrls: ['./maintrxcase.component.scss'],
    providers: [TrxCaseService]
})
export class MaintrxcaseComponent implements OnInit, OnDestroy {


    constructor(public Setting: PublicSetting, private trxService: TrxCaseService) {
        this.Setting.MainGridFilter = '';

    }

    ngOnInit() {

    }
    ngOnDestroy() {

    }

}
