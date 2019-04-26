import { Component, OnInit } from '@angular/core';
import {AccountService } from '../account.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-createsmsaccount',
  templateUrl: './createsmsaccount.component.html',
  styleUrls: ['./createsmsaccount.component.scss'],
  providers: [AccountService]
})
export class CreatesmsaccountComponent implements OnInit {

    account: any = {};
    constructor(
        private service: AccountService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    ngOnInit() {
    }
    onSave() {
        this.service.SaveData(this.account).subscribe(
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
