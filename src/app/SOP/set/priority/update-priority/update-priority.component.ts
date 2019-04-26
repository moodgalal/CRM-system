import { Component, OnInit } from '@angular/core';
import { SOP00012Service } from '../Priority.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-update-priority',
  templateUrl: './update-priority.component.html',
  styleUrls: ['./update-priority.component.scss'],
  providers: [SOP00012Service]
})
export class SOPUpdatePriorityComponent implements OnInit {

    SOP00012: any = {};
    constructor(
        private service: SOP00012Service,
        private alerts: ToastrService,
        public setting: PublicSetting
        , private activeRoute: ActivatedRoute

    ) { }

    ngOnInit() {
        this.SOP00012.PriorityID = this.activeRoute.snapshot.params['id'];
        this.service.GetSingle(this.SOP00012.PriorityID).subscribe(
            (res) => {
                this.SOP00012 = res;
            }, (err) => {
                console.log(err);
            });
    }
    onSave() {
        this.service.UpdateData(this.SOP00012).subscribe(
            (res) => {
                if (res.Status)
                    this.alerts.success(res.Massage);
                else
                    this.alerts.error(res.Massage);
            }, (err) => {
                this.alerts.error('Error please try again later .');
            });
    }


}
