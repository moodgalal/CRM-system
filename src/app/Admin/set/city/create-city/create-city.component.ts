import { Component, OnInit } from '@angular/core';

import { CityService } from '../City.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared'

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss'],
  providers: [CityService]
})
export class CreateCityComponent implements OnInit {

    sys00014: any = {};
    constructor(
        private service: CityService,
        private alerts: ToastrService,
        public setting: PublicSetting,

    ) { }


    ngOnInit() {
    }
    save() {
        this.service.Add(this.sys00014).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }
}
