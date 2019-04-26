import { Component, OnInit } from '@angular/core';
import { StatusTypeRolesService  } from "./StatusTypeRole.service";
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-status-type-role',
  templateUrl: './status-type-role.component.html',
  styleUrls: ['./status-type-role.component.scss'],
  providers: [StatusTypeRolesService ]
})
export class StatusTypeRoleComponent implements OnInit {

    CompanyList: Array<any> = [];
    CompanyID;
    companyRoles: Array<any> = [];
    CM00054: any = {};
    CM00054List: any[] = [];
    StatusTypeList : any[] = [];
    constructor(public Setting: PublicSetting,
        private service: StatusTypeRolesService ,
        private alerts: ToastrService) { }


    ngOnInit() {
        this.service.GetALlCompanies().subscribe((res) => {
            this.CompanyList = res;
        });
        this.service.getAllStatusType().subscribe((res) => this.StatusTypeList = res);
    }
    CompanyID_Changed() {

        this.service.GetRolesByCompany(this.CompanyID).subscribe((res) => { this.companyRoles = res; });
    }
    StatusActionTypeID_Changed(obj) {
        console.log(obj);
        this.service.GetRolesByStatusTypeID(obj).subscribe((res) => this.CM00054List = res);
    }


    OnAdd() {
        this.service.Add(this.CM00054).subscribe(
            (res) => {
                if (res.Status) {
                    this.CM00054List.push(this.CM00054);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.error(res.Massage);

                }

            }, (err) => this.alerts.error(`Error Please try again later `));
    }
   
    delete(item) {
        let index = this.CM00054List.indexOf(item);
        this.service.Delete(item).subscribe(
            (res) => {
                if (res) {
                    this.CM00054List.splice(index, 1);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.success(res.Massage);

                }
            }, (err) => this.alerts.error(`Error please try again later `));
    }

}
