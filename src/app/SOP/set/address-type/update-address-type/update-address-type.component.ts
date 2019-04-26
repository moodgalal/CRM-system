import { Component, OnInit } from '@angular/core';
import { SOP00008Service } from '../address-type.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-address-type',
  templateUrl: './update-address-type.component.html',
  styleUrls: ['./update-address-type.component.scss'],
  providers: [SOP00008Service]
})
export class UpdateAddressTypeComponent implements OnInit {

    SOP00009: any = {};
    constructor(
        private service: SOP00008Service,
        private alerts: ToastrService,
        public setting: PublicSetting
        , private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.SOP00009.SalePersonTypeID = this.activeRoute.snapshot.params['id'];
        this.service.GetSingle(this.SOP00009.SalePersonTypeID).subscribe(
            (res) => {
                console.log(res);
                this.SOP00009 = res;
            }, (err) => {
                console.log(err);
            });
    }
    onSave() {
        this.service.UpdateData(this.SOP00009).subscribe(
            (res) => {
                if (res)
                    this.alerts.success('Data Added successfully ');
                else
                    this.alerts.error('Data Dose not added');
            }, (err) => {
                this.alerts.error('Error please try again later .');
            });
    }


}
