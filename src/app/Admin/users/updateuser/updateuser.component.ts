import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { UserService } from "../UserService";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { PublicSetting } from "../../../models/PublicShared";

@Component({
    selector: 'app-updateuser',
    templateUrl: './updateuser.component.html',
    styleUrls: ['./updateuser.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UserService]
})
export class UpdateuserComponent implements OnInit {

    User: any = {};
    constructor(public setting: PublicSetting, private service: UserService, private alerts: ToastrService, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        let userName = this.activeRoute.snapshot.paramMap.get("UserName");
        this.service.GetSingle(userName)
            .subscribe((res) => {
                this.User = res
                //this.alerts.success("Data Updated Successfully")
            }, () => {
                this.alerts.error("Try Again Later Please")
            })
    }

    update() {
        this.service.UpdateData(this.User)
            .subscribe((res) => {
                if (res.Status)
                    this.alerts.success("Data Saved Successfully")
                else
                    this.alerts.error(res.Description);
            }, () => {
                this.alerts.error("Try Again Later Please")
            })
    }
    DeleteData() {
        this.service.DeleteData(this.User.UserName)
            .subscribe((res) => {
                if (res.Status) {
                    this.alerts.success(res.Massage)
                    this.setting.GoBack();
                }
                else
                    this.alerts.error(res.Description);
            }, () => {
                this.alerts.error("Try Again Later Please")
            })
    }
    ChangePassword() {
      this.service.ChangePassword(this.User.UserName, this.User.NewUserPassword).subscribe((res) => {
        if (res.Status) {
          this.alerts.success(res.Massage)
        }
        else
          this.alerts.error(res.Description);
      }, () => {
        this.alerts.error("Try Again Later Please")
      })
    }
}
