import { Component, OnInit } from '@angular/core';
import { SOP00014Service } from '../Status.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.scss'],
  providers: [SOP00014Service]
})
export class UpdateStatusComponent implements OnInit {

    SOP00014: any = {};
    constructor(
        private service: SOP00014Service,
        private alerts: ToastrService,
        public setting: PublicSetting
        , private activeRoute: ActivatedRoute

    ) { }

    ngOnInit() {
        this.SOP00014.StatusID= this.activeRoute.snapshot.params['id'];
        this.service.GetSingle(this.SOP00014.StatusID).subscribe(
            (res) => {
                console.log(res);
                this.SOP00014 = res;
            }, (err) => {
                console.log(err);
            });
    }
    onSave() {
        this.service.UpdateData(this.SOP00014).subscribe(
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
