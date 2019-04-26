import { Component, OnInit } from '@angular/core';
import { NationalityService } from '../Nationality.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared'
@Component({
  selector: 'app-create-nationality',
  templateUrl: './create-nationality.component.html',
  styleUrls: ['./create-nationality.component.scss'],
  providers: [NationalityService]
})
export class CreateNationalityComponent implements OnInit {

    sys00030: any = {};
    constructor(
        private service: NationalityService,
        private alerts: ToastrService,
        public setting: PublicSetting,

    ) { }


    ngOnInit() {
    }
    save() {
        this.service.Add(this.sys00030).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }

}
