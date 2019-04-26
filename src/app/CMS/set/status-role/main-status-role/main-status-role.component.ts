import { Component, OnInit } from '@angular/core';
import { StatusFieldsService } from "../StatusRole.service";
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
    selector: 'app-main-status-role',
    templateUrl: './main-status-role.component.html',
    styleUrls: ['./main-status-role.component.scss'],
    providers: [StatusFieldsService]
})
export class MainStatusRoleComponent implements OnInit {
    CompanyList: Array<any> = [];
    CompanyID;
    companyRoles: Array<any> = [];
    CM00052: any = {};
    CM00052List: any[] = [];
    CaseStatusList: any[] = [];
    constructor(public Setting: PublicSetting,
        private service: StatusFieldsService,
        private alerts: ToastrService) { }


    ngOnInit() {
        this.service.GetALlCompanies().subscribe((res) => {
            this.CompanyList = res;
        });
        this.service.getAllStatusCase().subscribe((res) => this.CaseStatusList = res);
    }
    CompanyID_Changed() {

        this.service.GetRolesByCompany(this.CompanyID).subscribe((res) => { this.companyRoles = res;  });
    }
    OnAdd() {
        this.service.Add(this.CM00052).subscribe(
            (res) => {
                if (res.Status) {
                    this.CM00052List.push(this.CM00052);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.error(res.Massage);

                }
                    
                    }, (err) => this.alerts.error(`Error Please try again later `));
    }
    CaseStatusID_Changed(obj) {
        this.service.GetRolesByCaseStatusID(obj).subscribe((res) => this.CM00052List = res);
    }
    delete(item) {
        let index = this.CM00052List.indexOf(item);
        this.service.Delete(item).subscribe(
            (res) => {
                if (res) {
                    this.CM00052List.splice(index, 1);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.success(res.Massage);

                }
            }, (err) =>this.alerts.error(`Error please try again later `));
    }
}
