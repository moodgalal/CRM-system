import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
  selector: 'app-createdash',
  templateUrl: './createdash.component.html',
  styleUrls: ['./createdash.component.scss'],
  providers: [DashboardService]
})
export class CreatedashComponent implements OnInit {
    CompanyList: any[] = [];
    dashboardList: any[] = [];
    update: boolean = false;
    Kaizen00050: any = {};

    constructor(
        private service: DashboardService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    CompanyID_Changed(CompanyId) {
        this.service.GetDashboardByCompany(CompanyId).subscribe(
            (res) => {
                this.dashboardList = res;
            });
    }
    ngOnInit() {
        this.service.GetALlCompanies().subscribe(
            (res) => {
                this.CompanyList = res;
            }
        );
  }
    onSave() {
        if (this.update) {
            this.service.EditDash(this.Kaizen00050).subscribe(
                (res) => {
                    if (res.Status) {
                        this.alerts.success(res.Massage);
                    }
                    else {
                        this.alerts.error(res.Massage);;
                    }

                }, (err) => {
                    this.alerts.error(`Error please try again later `);
                });
        } else {
            this.service.CreateDash(this.Kaizen00050).subscribe(
                (res) => {
                    if (res.Status) {
                        this.alerts.success(res.Massage);
                        this.dashboardList.push(this.Kaizen00050);
                    }
                    else {
                        this.alerts.error(res.Massage);;
                    }

                }, (err) => {
                    this.alerts.error(`Error please try again later `);
                });
        }
      
  }
  delete(item) {
     let index= this.dashboardList.indexOf(item);
      this.service.removeDash(item).subscribe(
          (res) => {
              if (res.Status) {
                  this.alerts.success(res.Massage);
                  this.dashboardList.splice(index, 1);
              }
              else {
                  this.alerts.error(res.Massage);;
              }

          }, (err) => {
              this.alerts.error(`Error please try again later `);
          });
  }
  edit(item) {
      this.Kaizen00050 = item;
      this.update = true;
  }
}
