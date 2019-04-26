import { Component, OnInit } from '@angular/core';
import { SOP00011Service } from '../group.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
  providers: [SOP00011Service]
})
export class CreateGroupComponent implements OnInit {

    SOP00011: any = {};
    constructor(
        private service: SOP00011Service,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    ngOnInit() {
    }
    onSave() {
        this.service.SaveData(this.SOP00011).subscribe(
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
