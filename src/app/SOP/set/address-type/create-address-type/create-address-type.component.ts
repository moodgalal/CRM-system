import { Component, OnInit } from '@angular/core';
import { SOP00008Service } from '../address-type.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-create-address-type',
  templateUrl: './create-address-type.component.html',
  styleUrls: ['./create-address-type.component.scss'],
  providers: [SOP00008Service]
})
export class CreateAddressTypeComponent implements OnInit {

    SOP00009: any = {};
    constructor(
        private service: SOP00008Service,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    ngOnInit() {
    }
    onSave() {
        this.service.SaveData(this.SOP00009).subscribe(
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
