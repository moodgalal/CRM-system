import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'
import { CityService } from '../City.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared'
@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.scss'],
  providers: [CityService]
})
export class UpdateCityComponent implements OnInit {

    sys00014: any = {};
    constructor(
        private service: CityService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sys00014.CityID = this.route.snapshot.params['id'];
        this.service.GetSingle(this.sys00014.CityID).subscribe((res) => this.sys00014 = res);
    }
    save() {
        this.service.Update(this.sys00014).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }
    delete() {
        this.service.Delete(this.sys00014).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }

}
