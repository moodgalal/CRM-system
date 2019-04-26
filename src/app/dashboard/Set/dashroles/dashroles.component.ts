import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
  selector: 'app-dashroles',
  templateUrl: './dashroles.component.html',
  styleUrls: ['./dashroles.component.scss'],
  providers: [DashboardService]
})
export class DashrolesComponent implements OnInit {
    DashboardList: any[] = [];
    CompanyList: any[] = [];
    RolesList: any[] = [];
    Kaizen00054List: any[] = [];
    Kaizen00054: any = {};
    constructor(
        private service: DashboardService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    ngOnInit() {
        this.service.GetALlCompanies().subscribe(
            (res) => { this.CompanyList = res });
    }
    CompanyID_Changed(CompanyId) {
        console.log(CompanyId);
        this.service.GetDashboardByCompany(CompanyId).subscribe(
            (res) => this.DashboardList = res);
        this.service.GetRolesByCompany(CompanyId).subscribe(
            (res) => this.RolesList = res);
    }
    DashboardCode_Changed(DashboardCode) {
        // get roles in dash
        this.service.GetDashRoles(DashboardCode).subscribe(
            (res) => this.Kaizen00054List = res);
    }
    RoleID_Changed(roleId) {

    }
    onSaveKaizen00054() {
        this.service.AddDashboardRole(this.Kaizen00054).subscribe(
            (res) => {
                if (res.Status) {
                    this.alerts.success(res.Massage);
                    this.Kaizen00054List.push(this.Kaizen00054);
                    this.Kaizen00054 = {};
                } else {
                    this.alerts.error(res.Massage);
                }
            }, (err) => this.alerts.error(`Error Please try again later`));
    }
    onRemoveKaizen00054(row) {
        let index = this.Kaizen00054List.indexOf(row);
        this.service.RemoveDashboardRole(row).subscribe(
            (res) => {
                if (res.Status) {
                    this.Kaizen00054List.splice(index, 1);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.error(res.Massage);
                }
            }, (err) => this.alerts.error(`Error Please try again later`));
    }

}
