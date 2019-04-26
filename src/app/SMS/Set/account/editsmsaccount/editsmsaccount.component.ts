import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editsmsaccount',
  templateUrl: './editsmsaccount.component.html',
  styleUrls: ['./editsmsaccount.component.scss'],
  providers: [AccountService]
})
export class EditsmsaccountComponent implements OnInit {

    account: any = {};
    constructor(
        private service: AccountService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.account.SMSAccountCode = this.activeRoute.snapshot.params['id'];
        this.service.GetSingle(this.account.SMSAccountCode).subscribe(
            (res) => {
                this.account = res;
            }, (err) => {
                console.log(err);
            });
    }
    onSave() {
        this.service.UpdateData(this.account).subscribe(
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
