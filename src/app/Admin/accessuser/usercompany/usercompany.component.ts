import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../AdminService";
import { ToastrService } from "ngx-toastr";
import { PublicSetting } from "../../../models/PublicShared";
@Component({
  selector: 'app-usercompany',
  templateUrl: './usercompany.component.html',
  styleUrls: ['./usercompany.component.scss'],
  providers: [AdminService]
})
export class UsercompanyComponent implements OnInit {
  CompanyList: Array<any> = [];
  RoleList: Array<any> = [];
  CompanyRoleList: Array<any> = [];
  selectedCompany;
  Kaizen006: any = {};

  constructor(private service: AdminService, public Setting: PublicSetting, private alerts: ToastrService) { }

  ngOnInit() {
    this.service.GetALlCompanies()
      .subscribe((res) => {
        this.CompanyList = res;
      }, () => {
        this.alerts.error("Try Again Later Please")
      })
    this.service.GetALlRoles()
      .subscribe((res) => {
        this.RoleList = res;
      }, () => {
        this.alerts.error("Try Again Later Please")
      })
  }
  GetRolesByCompany() {
    this.Kaizen006.CompanyID = this.selectedCompany.CompanyID;
    this.CompanyRoleList = [];
    this.service.GetRolesByCompany(this.selectedCompany.CompanyID).subscribe((res) => {
      this.CompanyRoleList = res;
      this.Applyroling();
    })
  }
  Applyroling() {
    this.RoleList.forEach(col => {
      col.checked = false;
      this.CompanyRoleList.forEach(Usercol => {
        if (Usercol.RoleID == col.RoleID)
          col.checked = true;
      })
    })
  }
  ApplyRole(role) {
    this.Kaizen006.RoleID = role.RoleID;
    if (role.checked) {
      this.service.SaveCompanyRole(this.Kaizen006)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(`${res.Massage}`);
        });
    }
    else {
      this.service.DeleteCompanyRole(this.Kaizen006)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(`${res.Massage}`);
        });
    }
  }
}
