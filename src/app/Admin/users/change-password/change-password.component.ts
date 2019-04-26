import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import { UserService } from "../UserService";
import { PublicSetting } from "../../../models/PublicShared";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers : [UserService]
})
export class ChangePasswordComponent implements OnInit {
  UserName : string;
  OldPassword : string;
  NewPassword: string;
  constructor(public Setting: PublicSetting,private service : UserService,  private alerts: ToastrService) { }

  ngOnInit() {
  }

  change() {
    this.service.RestPassword(this.UserName, this.OldPassword, this.NewPassword)
      .subscribe((res) => {
        if (res.Status)
          this.alerts.success(res.Massage);
        else
          this.alerts.error(res.Massage)
      })
  }
}
