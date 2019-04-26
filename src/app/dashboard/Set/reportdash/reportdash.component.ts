import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
  selector: 'app-reportdash',
  templateUrl: './reportdash.component.html',
  styleUrls: ['./reportdash.component.scss'],
  providers: [DashboardService]
})
export class ReportdashComponent implements OnInit {
    DashboardList: any[] = [];
    CompanyList: any[] = [];
    Kaizen00052List: any[] = [];
    Kaizen00053List: any[] = [];
    Kaizen00053: any = {};
    constructor(
        private service: DashboardService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    ngOnInit() {
        this.service.GetALlCompanies().subscribe(
            (res) => { this.CompanyList = res });
        this.service.GetAllReports().subscribe(
            (res) => { this.Kaizen00052List = res });
        
  }
    CompanyID_Changed(CompanyId) {
        this.service.GetDashboardByCompany(CompanyId).subscribe(
            (res) => this.DashboardList=res);
  }
    DashboardCode_Changed(DashboardCode) {
         this.service.GetKaizen00035ByReportAndDashboard(this.Kaizen00053.DashboardCode)
            .subscribe(
            (res) => {
                this.Kaizen00052List.forEach(item => {
                    item.checked = false;
                    res.forEach(ReportItem => {
                        if (ReportItem.ReportID == item.ReportID)
                            item.checked = true;
                    });
                });
            });
  }
    ReportID_Changed(obj) {
        console.log(obj)
       
  }
  addOrDelete(report) {
      this.Kaizen00053.ReportID = report.ReportID;
      this.Kaizen00053.ReportName = report.ReportName;
      if (report.checked) {
          this.service.AddKaizen00053(this.Kaizen00053).
              subscribe(
              (res) => {
                  if (res.Status)
                      this.alerts.success(res.Massage);
                  else
                      this.alerts.error(`${res.Massage}`);
              });
      } else {
          this.service.RemoveKaizen00053(this.Kaizen00053).
              subscribe(
              (res) => {
                  if (res.Status)
                      this.alerts.success(res.Massage);
                  else
                      this.alerts.error(`${res.Massage}`);
              });
      }
  }
}
