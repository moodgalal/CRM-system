import { Component, OnInit } from '@angular/core';

import { StatusScriptService } from '../StatusScript.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-create-status-script',
  templateUrl: './create-status-script.component.html',
  styleUrls: ['./create-status-script.component.scss'],
  providers: [StatusScriptService]
})
export class CreateStatusScriptComponent implements OnInit {
    CM00026: any = {};
    CaseStatusList: any[]=[];
    constructor(
        private service: StatusScriptService,
        private alerts: ToastrService,
        public setting: PublicSetting,
    ) { }

    ngOnInit() {
        this.service.getCaseStatus().subscribe((res) => { console.log(res); this.CaseStatusList = res; });
    }
    save() {

        this.service.Add(this.CM00026).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }


}
