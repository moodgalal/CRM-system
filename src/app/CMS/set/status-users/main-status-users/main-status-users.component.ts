import { Component, OnInit } from '@angular/core';
import { StatusUsersService } from "../StatusUsers.service";
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';

@Component({
  selector: 'app-main-status-users',
  templateUrl: './main-status-users.component.html',
  styleUrls: ['./main-status-users.component.scss'],
  providers: [StatusUsersService]
})
export class MainStatusUsersComponent implements OnInit {

    CompanyList: Array<any> = [];
    CompanyID;
    companyRoles: Array<any> = [];
    CM00051: any = {};
    CM00051List: any[] = [];
    CaseStatusList: any[] = [];
    constructor(public Setting: PublicSetting,
        private service: StatusUsersService,
        private alerts: ToastrService) { }


    ngOnInit() {
        this.service.GetALlCompanies().subscribe((res) => {
            this.CompanyList = res;
        });
        this.service.getAllStatusCase().subscribe((res) => this.CaseStatusList = res);
    }
    CaseStatusID_Changed(obj) {
        this.service.GetUsersByCaseStatusID(obj).subscribe((res) => this.CM00051List = res);

    }
    user_select(user) {
        console.log(user);
        this.CM00051.UserName = user.UserName;
    }
    OnAdd() {
        this.service.Add(this.CM00051).subscribe(
            (res) => {
                if (res.Status) {
                    this.CM00051List.push(this.CM00051);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.error(res.Massage);

                }

            }, (err) => this.alerts.error(`Error Please try again later `));
    }
    delete(item) {
        let index = this.CM00051List.indexOf(item);
        this.service.Delete(item).subscribe(
            (res) => {
                if (res) {
                    this.CM00051List.splice(index, 1);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.success(res.Massage);

                }
            }, (err) => this.alerts.error(`Error please try again later `));
    }
}
