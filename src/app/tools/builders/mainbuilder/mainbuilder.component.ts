import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {BuildersService} from "../builders-service.service";
import { ToastrService } from "ngx-toastr";
import { BuliderColumns} from '../Bulider.columns';
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
    selector: 'app-mainbuilder',
    templateUrl: './mainbuilder.component.html',
    styleUrls: ['./mainbuilder.component.scss'],
    providers: [BuildersService]
})
export class MainbuilderComponent implements OnInit {

    constructor(private service: BuildersService, private alerts: ToastrService, private Setting: PublicSetting) {

        PublicShared.MainGridURL = 'Sys/TRXType/GetDataGrid';
        this.Setting.gridColumns = BuliderColumns.BuliderColumns;


    }
    ngOnInit() {

    }
}
