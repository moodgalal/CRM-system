import { Component, OnInit } from '@angular/core';
import { AccountUserService } from './AccountUser.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.scss'],
  providers: [AccountUserService]
})
export class AccountUserComponent implements OnInit {

    MS00101: any = {};
    SelectedAccount: any = {};
    MS00101List: any[] = [];
    AccountList: any[] = [];
    constructor(
        private service: AccountUserService,
        private alerts: ToastrService,
        public Setting: PublicSetting
    ) { }

    ngOnInit() {
        this.service.getAllAcounts().subscribe((res) =>{ this.AccountList = res;console.log(res);});
  }
    SMSAccountNamevalueChange_valueChange(obj) {
        this.MS00101.SMSAccountCode = obj.SMSAccountCode;
    }
  GetUser(user) {
      console.log(user);
      this.service.getByUser(user.UserName).subscribe((res) => this.MS00101List = res);
      this.MS00101.UserName = user.UserName;
  }

  Add() {
 
      this.MS00101.AccountPrice = this.SelectedAccount.AccountPrice;

      this.service.Add(this.MS00101).subscribe((res) => {
          if (res.Status) {
              this.MS00101List.push(this.MS00101);
              this.alerts.success(res.Massage);
          } else {
              this.alerts.error(res.Massage);
          }
      }, (err) => { this.alerts.error(`Error please try again later `) });
  }
  delete(item) {
      let index = this.MS00101List.indexOf(item);
      this.service.Delete(item).subscribe((res) => {
          if (res.Status) {
              this.alerts.success(res.Massage);
              this.MS00101List.splice(1, index);
          } else {
              this.alerts.error(res.Massage);
          }
      }, (err) => { this.alerts.error(`Error please try again later `) });
  }
}
