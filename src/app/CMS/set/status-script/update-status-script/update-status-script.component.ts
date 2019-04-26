import { Component, OnInit } from '@angular/core';
import { StatusScriptService } from '../StatusScript.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-update-status-script',
  templateUrl: './update-status-script.component.html',
  styleUrls: ['./update-status-script.component.scss'],
  providers: [StatusScriptService]
})
export class UpdateStatusScriptComponent implements OnInit {

    CM00026: any = {};
    CaseStatusList: any[] = [];
    constructor(
        private service: StatusScriptService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.CM00026.StatusScriptID = this.route.snapshot.params['id'];
        this.service.GetSingle(this.CM00026.StatusScriptID).subscribe((res) => this.CM00026 = res);
        this.service.getCaseStatus().subscribe((res) => { this.CaseStatusList = res; });
    }
    save() {

        this.service.Update(this.CM00026).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }
    delete() {
        this.service.Delete(this.CM00026).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });

    }

  
}
