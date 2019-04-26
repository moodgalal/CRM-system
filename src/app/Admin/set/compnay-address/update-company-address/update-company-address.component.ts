import { Component, OnInit } from '@angular/core';
import { CompanyAddressService } from '../CompanyAddress.service';

import {ActivatedRoute} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared'
@Component({
  selector: 'app-update-company-address',
  templateUrl: './update-company-address.component.html',
  styleUrls: ['./update-company-address.component.scss'],
  providers: [CompanyAddressService]
})
export class UpdateCompanyAddressComponent implements OnInit {

    sys00001: any = {};
    cityList: any[] = [];
    countryList: any[] = [];

    constructor(
        private service: CompanyAddressService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private route: ActivatedRoute
    ) { }


    ngOnInit() {
        this.sys00001.CompanyAddressCode = this.route.snapshot.params['id'];
        this.service.GetSingle(this.sys00001.CompanyAddressCode).subscribe((res) => this.sys00001 = res);
        this.service.getAllCountries().subscribe((res) => this.countryList = res);
        this.service.getAllCities().subscribe((res) => this.cityList = res);

    }
    save() {
        this.service.Update(this.sys00001).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }
    delete() {
        this.service.Delete(this.sys00001).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }


}
