import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
  selector: 'app-reportroles',
  templateUrl: './reportroles.component.html',
  styleUrls: ['./reportroles.component.scss'],
  providers: [DashboardService]
})
export class ReportrolesComponent implements OnInit {
    CompanyList: any[] = [];
    RolesList: any[] = [];
    ReportList: any[] = [];
    Kaizen00056List: any[] = [];
    Kaizen00056: any = {};
    constructor(
        private service: DashboardService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    ngOnInit() {
        this.service.GetALlCompanies().subscribe(
            (res) => { this.CompanyList = res });
        this.service.GetAllReports().subscribe(
            (res) => this.ReportList = res);
    }
    CompanyID_Changed(CompanyId) {
        this.service.GetRolesByCompany(CompanyId).subscribe(
            (res) => this.RolesList = res);
    }
    ReportID_Changed(reportID) {
        this.service.GetReportRoles(reportID).subscribe(
            (res) => this.Kaizen00056List = res);
    }
    onSaveKaizen00056() {
        this.service.AddReportRole(this.Kaizen00056).subscribe(
            (res) => {
                if (res.Status) {
                    this.alerts.success(res.Massage);
                    this.Kaizen00056List.push(this.Kaizen00056);
                    this.Kaizen00056 = {};
                } else {
                    this.alerts.error(res.Massage);
                }
            }, (err) => this.alerts.error(`Error Please try again later`));
    }
    onRemoveKaizen00056(row) {
        let index = this.Kaizen00056List.indexOf(row);
        this.service.RemoveReportRole(row).subscribe(
            (res) => {
                if (res.Status) {
                    this.Kaizen00056List.splice(index, 1);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.error(res.Massage);
                }
            }, (err) => this.alerts.error(`Error Please try again later`));
    }
}
