import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';

@Component({
  selector: 'app-reportuserrole',
  templateUrl: './reportuserrole.component.html',
  styleUrls: ['./reportuserrole.component.scss'],
  providers: [DashboardService]
})
export class ReportuserroleComponent implements OnInit {
    CompanyList: any[] = [];
    ReportList: any[] = [];
    Kaizen00057: any = {};
    Kaizen00057List: any[] = [];

    constructor(
        private service: DashboardService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

  ngOnInit() {
      this.service.GetALlCompanies().subscribe(
          (res) => { this.CompanyList = res });
      this.service.GetAllReports().subscribe(
          (res) => { this.ReportList = res });
  }
  User_Change(event) {
      console.log(event);
      this.Kaizen00057.UserName = event.UserName;
  }
  ReportID_Changed(reportId) {
      this.service.GetReportUsers(reportId).subscribe(
          (res) => this.Kaizen00057List = res);
  }
  onSaveKaizen00057() {
      this.service.RemoveReportUser(this.Kaizen00057).subscribe(
          (res) => {
              if (res.Status) {
                  this.alerts.success(res.Massage);
                  this.Kaizen00057List.push(this.Kaizen00057);
              } else {
                  this.alerts.error(res.Massage);
              }
          }, (err) => {
              this.alerts.error('Error Please try again later ');
          });
  }
  onRemoveKaizen00057(user) {
      let index = this.Kaizen00057List.indexOf(user);
      this.service.RemoveReportUser(user).subscribe(
          (res) => {
              if (res.Status) {
                  this.Kaizen00057List.splice(index, 1);
                  this.alerts.success(res.Massage);
              } else {
                  this.alerts.error(res.Massage);
              }
          }, (err) => {
              this.alerts.error('Error Please try again later ');
          });
  }
}
