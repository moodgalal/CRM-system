import { Component, OnInit } from '@angular/core';
import { SOP00012Service } from '../Priority.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-create-priority',
  templateUrl: './create-priority.component.html',
  styleUrls: ['./create-priority.component.scss'],
  providers: [SOP00012Service]
})
export class CreatePriorityComponent implements OnInit {

    SOP00012: any = {};
    constructor(
        private service: SOP00012Service,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    ngOnInit() {
    }
    onSave() {
        this.service.SaveData(this.SOP00012).subscribe(
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
