import { Component, OnInit } from '@angular/core';

import  {ActivatedRoute} from '@angular/router'
import { CountrykService } from '../Country.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared'
@Component({
  selector: 'app-update-county',
  templateUrl: './update-county.component.html',
  styleUrls: ['./update-county.component.scss'],
  providers: [CountrykService]
})
export class UpdateCountyComponent implements OnInit {

    sys00013: any = {};
    constructor(
        private service: CountrykService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sys00013.CountryID = this.route.snapshot.params['id'];
        this.service.GetSingle(this.sys00013.CountryID).subscribe((res) => this.sys00013=res);
  }
    save() {
        this.service.Update(this.sys00013).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }
    delete(){
        this.service.Delete(this.sys00013).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }
}
