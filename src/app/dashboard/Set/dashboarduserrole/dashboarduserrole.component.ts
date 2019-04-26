import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
  selector: 'app-dashboarduserrole',
  templateUrl: './dashboarduserrole.component.html',
  styleUrls: ['./dashboarduserrole.component.scss'],
  providers: [DashboardService]
})
export class DashboarduserroleComponent implements OnInit {
    DashboardList: any[] = [];
    CompanyList: any[] = [];
    Kaizen00055: any = {};
    Kaizen00055List: any[] = [];
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
          (res) => {
          this.DashboardList = res;
          console.log(res);

          });
  }
  User_Change(obj) {
      this.Kaizen00055.UserName = obj.UserName;
  }
  DashboardCode_Changed(DashboardCode) {
      this.service.GetDashboardUsers(DashboardCode).subscribe(
          (res) => this.Kaizen00055List = res);
  }
  onSaveKaizen00055() {
      this.service.AddDashboardUser(this.Kaizen00055).subscribe(
          (res) => {
              if (res.Status) {
                  this.alerts.success(res.Massage);
                  this.Kaizen00055List.push(this.Kaizen00055);
                  this.Kaizen00055 = {};
              } else {
                  this.alerts.error(res.Massage);
              }
          }, (err) => this.alerts.error(`Error Please try again later`));
  }
  onRemoveKaizen00055(dashUser) {
      let index = this.Kaizen00055List.indexOf(dashUser);
      this.service.RemoveDashboardUser(dashUser).subscribe(
          (res) => {
              if (res.Status) {
                  this.Kaizen00055List.splice(index, 1);
                  this.alerts.success(res.Massage);
              } else {
                  this.alerts.error(res.Massage);
              }
          }, (err) => this.alerts.error(`Error Please try again later`));
  }
}
