import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NationalityService } from '../Nationality.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared'
@Component({
  selector: 'app-update-nationality',
  templateUrl: './update-nationality.component.html',
  styleUrls: ['./update-nationality.component.scss']
    , providers: [NationalityService]
})
export class UpdateNationalityComponent implements OnInit {


    sys00030: any = {};
    constructor(
        private service: NationalityService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sys00030.NationalityID = this.route.snapshot.params['id'];
        this.service.GetSingle(this.sys00030.NationalityID).subscribe((res) => this.sys00030 = res);
    }
    save() {
        this.service.Update(this.sys00030).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }
    delete() {
        this.service.Delete(this.sys00030).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }

}
