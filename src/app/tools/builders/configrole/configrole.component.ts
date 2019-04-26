import { Component, OnInit } from '@angular/core';
import { BuildersService } from "../builders-service.service";
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
import { DashboardService } from '../../../dashboard/Set/dashboard.service';
 
@Component({
  selector: 'app-configrole',
  templateUrl: './configrole.component.html',
  styleUrls: ['./configrole.component.scss'],
  providers: [BuildersService, DashboardService]
})
export class ConfigroleComponent implements OnInit {
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
    CM00056: any = {};
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
        this.dashServers.GetRolesByCompany(this.CompanyID).subscribe((res) => { this.companyRoles = res;console.log(res) });
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
        this.service.GetRolesByTrxTypeId(trxtypeId).subscribe(
            (res) => { this.rolesList = res;console.log(res) });
    }
    delete(item) {
        let index = this.rolesList.indexOf(item);
        this.service.DeleteDataSourceRole(item).subscribe(
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
    AddDataSourceRole() {
        this.service.AddDataSourceRole(this.CM00056).subscribe(
            (res) => {
                if (res.Status) this.alerts.success(res.Massage);
                else this.alerts.error(res.Massage);
            }, (err) => {
                this.alerts.error('Error Please Try Again later ');
            });
    }

}
