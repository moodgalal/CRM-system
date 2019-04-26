import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../AdminService";
import { ToastrService } from "ngx-toastr";
import { PublicSetting } from "../../../models/PublicShared";
@Component({
  selector: 'app-roleuser',
  templateUrl: './roleuser.component.html',
  styleUrls: ['./roleuser.component.scss'],
  providers: [AdminService]
})
export class RoleuserComponent implements OnInit {
  CompanyList: Array<any> = [];
  RoleList: Array<any> = [];
  UserRoleList: Array<any> = [];
  selectedCompany;
  KaizenUserRole: any = {};
  constructor(private service: AdminService, public Setting: PublicSetting, private alerts: ToastrService) { }

  ngOnInit() {
    this.service.GetALlCompanies()
      .subscribe((res) => {
        this.CompanyList = res;
      }, () => {
        this.alerts.error("Try Again Later Please")
      })
  }
  GetRole() {
    this.RoleList = [];
    this.service.GetRolesByCompany(this.selectedCompany.CompanyID).subscribe((res) => {
      this.RoleList = res;
      this.Applyroling();
    })
  }
  Applyroling() {
    this.RoleList.forEach(col => {
      col.checked = false;
      this.UserRoleList.forEach(Usercol => {
        if (Usercol.RoleID == col.RoleID)
          col.checked = true;
      })
    })
  }
  User_Change(event) {
    this.KaizenUserRole.UserName = event.UserName;
    this.UserRoleList = [];
    this.service.GetRolesByUser(this.KaizenUserRole.UserName).subscribe((res) => {
      this.UserRoleList = res;
      this.Applyroling();

    })
   
  }
  ApplyRole(role) {
    console.log(role.checked);
    //role.checked = !role.checked;
    //this.KaizenUserRole = {};
    //this.KaizenUserRole.RoleID = role.RoleID;
    this.KaizenUserRole.RoleID = role.RoleID;
    console.log(role.checked);
    if (role.checked) {
      console.log(this.KaizenUserRole);
      this.service.SaveDataKaizenUserRole(this.KaizenUserRole)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(`${res.Massage}`);
        });
    }
    else {
      this.service.DeleteKaizenUserRole(this.KaizenUserRole)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(`${res.Massage}`);
        });
    }
  }
}
