import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
import { DashboardService } from '../../../dashboard/Set/dashboard.service';
import { BuildersService } from "../builders-service.service";

@Component({
    selector: 'app-conguser',
    templateUrl: './conguser.component.html',
    styleUrls: ['./conguser.component.scss'],
    providers: [BuildersService, DashboardService]
})
export class ConguserComponent implements OnInit {

    CompanyList: Array<any> = [];
    CompanyID;
    ModuleList: Array<any> = [];
    ModuleID;
    WindowSourceList: Array<any> = [];
    WindowSource;
    sources: Array<any> = [];
    viewsList: Array<any> = [];
    viewColumns: Array<any> = [];
    sourceColumns: Array<any> = [];
    checkedColumns: Array<any> = [];
    rolesList: Array<any> = null;
    companyRoles: Array<any> = [];
    CM00057: any = {};
    constructor(public Setting: PublicSetting, private dashServers: DashboardService, private service: BuildersService, private alerts: ToastrService) { }



    ngOnInit() {
        this.service.GetALlCompanies().subscribe((res) => {
            console.log(res);
            this.CompanyList = res;
        })
    }
    CompanyID_Changed() {
        this.ModuleList = [];
        this.service.GetModuleByCompany(this.CompanyID).subscribe((res) => {
            this.ModuleList = res;
        });
        this.dashServers.GetRolesByCompany(this.CompanyID).subscribe((res) => { this.companyRoles = res; console.log(res) });
    }
    ModuleID_Changed() {
        this.WindowSourceList = [];
        this.service.GetScreensByModuleID(this.ModuleID).subscribe((res) => {
            this.WindowSourceList = res;
        })
    }
    WindowSource_Changed() {
        this.sources = [];
        this.service.GetTRXTypeIDByWindowSource(this.WindowSource).subscribe((res) => {
            this.sources = res;
        })
    }
    sources_Change(trxtypeId) {
        this.service.GetUsersByTrxTypeId(trxtypeId).subscribe(
            (res) => { this.rolesList = res; console.log(res) });
    }
    userValue(user) {
        this.CM00057.UserName = user.UserName;
    }
    AddDataSourceUser() {
        this.service.AddDataSourceUser(this.CM00057).subscribe(
            (res) => {
                if (res.Status) {
                    this.alerts.success(res.Massage);
                    this.rolesList.push(this.CM00057);
                } else {
                    this.alerts.error(res.Massage);

                }
            }, (err) => this.alerts.error(`Error Please try again later `));
    }
    delete(item) {
        let index = this.rolesList.indexOf(item);
        this.service.DeleteDataSourceUser(item).subscribe(
            (res) => {
                if (res.Status) {
                    this.rolesList.splice(index, 1);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.error(res.Massage);

                }
            }, (err) => {
                this.alerts.error('Error Please try again  later ');

            });
    }
}
