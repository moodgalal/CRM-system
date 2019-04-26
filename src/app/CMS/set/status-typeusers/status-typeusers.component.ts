import { Component, OnInit } from '@angular/core';

import { StatusTypeUsersService } from "./StatusTypeUsers.service";
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-status-typeusers',
  templateUrl: './status-typeusers.component.html',
  styleUrls: ['./status-typeusers.component.scss'],
  providers: [StatusTypeUsersService]
})
export class StatusTypeusersComponent implements OnInit {

    CompanyList: Array<any> = [];
    CM00053: any = {};
    CM00053List: any[] = [];
    StatusTypeList: any[] = [];
    constructor(public Setting: PublicSetting,
        private service: StatusTypeUsersService,
        private alerts: ToastrService) { }

    
    ngOnInit() {
        this.service.GetALlCompanies().subscribe((res) => {
            this.CompanyList = res;
        });
        
        this.service.getAllStatusType().subscribe((res) => this.StatusTypeList = res);
    }
    user_select(user) {
        this.CM00053.UserName = user.UserName;
    }
    StatusActionTypeID_Changed(obj) {
        this.service.GetUsersByStatusTypeID(obj).subscribe(
            (res) => this.CM00053List = res);
    }
    
    OnAdd() {
        this.service.Add(this.CM00053).subscribe(
            (res) => {
                if (res.Status) {
                    this.CM00053List.push(this.CM00053);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.error(res.Massage);

                }

            }, (err) => this.alerts.error(`Error Please try again later `));
    }

    delete(item) {
        let index = this.CM00053List.indexOf(item);
        this.service.Delete(item).subscribe(
            (res) => {
                if (res) {
                    this.CM00053List.splice(index, 1);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.success(res.Massage);

                }
            }, (err) => this.alerts.error(`Error please try again later `));
    }

}
