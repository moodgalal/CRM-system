import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../AdminService";
import { ToastrService } from "ngx-toastr";
import { PublicSetting } from "../../../models/PublicShared";

@Component({
  selector: 'app-accesmenurole',
  templateUrl: './accesmenurole.component.html',
  styleUrls: ['./accesmenurole.component.scss'],
  providers: [AdminService]
})
export class AccesmenuroleComponent implements OnInit {
  CompanyList: Array<any> = [];
  CompanyID;
  RolesList: Array<any> = [];
  RoleID;
  MenueTypeList: Array<any> = [];
  SelectedMenueTypeID: any = {};
  ModuleList: Array<any> = [];
  SelectedModuleID: any = {};

  MenueList: Array<any> = [];
  constructor(private service: AdminService, public Setting: PublicSetting, private alerts: ToastrService) { }

  ngOnInit() {
    this.service.GetALlCompanies()
      .subscribe((res) => {
        this.CompanyList = res;
      }, () => {
        this.alerts.error("Try Again Later Please")
      })
    this.service.GetMenueType().subscribe((res) => {
        this.MenueTypeList = res;
      }, () => {
        this.alerts.error("Try Again Later Please")
      })
  }
  CompanyID_Changed() {
    this.ModuleList = [];
    this.service.GetModuleByCompany(this.CompanyID).subscribe((res) => {
      this.ModuleList = res;
      this.SelectedModuleID = {};
    })
    this.RolesList = [];
    this.service.GetRolesByCompany(this.CompanyID).subscribe((res) => {
      this.RolesList = res;
    })
  }
  ModuleID_Changed() {
    //this.WindowSourceList = [];
    //this.service.GetMenueType(this.ModuleID).subscribe((res) => {
    //  this.WindowSourceList = res;
    //})
    this.GetMasterMenu();
  }
  MenueTypeID_Changed() {
    this.GetMasterMenu();
  }
  GetMasterMenu() {
    this.MenueList = [];
    if (this.SelectedModuleID.ModuleID == undefined) return;
    if (this.SelectedMenueTypeID.MenueTypeID == undefined) return;
    this.service.GetMasterMenu(this.SelectedModuleID.ModuleID, this.SelectedMenueTypeID.MenueTypeID).subscribe((res) => {
      this.MenueList = res;
      if (this.RoleID == undefined) return;
      this.RoleID_Changed();
    })

  }
  RoleID_Changed() {
    this.service.GetRoleTasks(this.SelectedModuleID.ModuleID, this.SelectedMenueTypeID.MenueTypeID, this.RoleID, this.CompanyID).subscribe((res) => {
      //this.MenueList = res;
      this.MenueList.forEach(col => {
        col.checked = false;
        res.forEach(role => {
          if (role.TaskID == col.TaskID) {
            col.checked = true;
          }
        })
      })
    })
  }

  addOrDelete(col) {
    col.RoleID = this.RoleID;
    col.CompanyID = this.CompanyID;
    if (col.checked) {
      this.service.SaveMenu(col)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(`${res.Massage}`);
        });
    }
    else {
      this.service.DeleteMenu(col)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(`${res.Massage}`);
        });
    }
  }
}
