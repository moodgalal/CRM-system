import { Component, OnInit } from '@angular/core';
import { CompanyAddressService } from '../CompanyAddress.service';


import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared'
@Component({
  selector: 'app-create-company-address',
  templateUrl: './create-company-address.component.html',
  styleUrls: ['./create-company-address.component.scss'],
  providers: [CompanyAddressService]
})
export class CreateCompanyAddressComponent implements OnInit {

    sys00001: any = {};
    cityList: any[] = [];
    countryList: any[] = [];

    constructor(
        private service: CompanyAddressService,
        private alerts: ToastrService,
        public setting: PublicSetting,

    ) { }


    ngOnInit() {
        this.service.getAllCountries().subscribe((res) => this.countryList = res);
        this.service.getAllCities().subscribe((res) => this.cityList = res);

    }
    save() {
        this.service.Add(this.sys00001).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }

}
