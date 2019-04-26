import { Component, OnInit } from '@angular/core';
import { SOP00014Service } from '../Status.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-create-status',
  templateUrl: './create-status.component.html',
  styleUrls: ['./create-status.component.scss'],
  providers: [SOP00014Service]
})
export class CreateStatusComponent implements OnInit {

    SOP00014: any = {};
    constructor(
        private service: SOP00014Service,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    ngOnInit() {
    }
    onSave() {
        this.service.SaveData(this.SOP00014).subscribe(
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
