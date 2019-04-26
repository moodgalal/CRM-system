import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BuildersService } from "../builders-service.service";
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';

@Component({
  selector: 'app-role-access',
  templateUrl: './role-access.component.html',
  styleUrls: ['./role-access.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [BuildersService]
})
export class RoleAccessComponent implements OnInit {
  CompanyList: Array<any> = [];
  CompanyID;
  ModuleList: Array<any> = [];
  ModuleID;
  WindowSourceList: Array<any> = [];
  WindowSource;
  sources: Array<any> = [];
  SelectedTRXType: any;
  viewsList: Array<any> = [];
  selectedView: any;
  RoleList: Array<any> = [];
  RoleViewList: Array<any> = [];
  CM00072: any = {};
  constructor(public Setting: PublicSetting, private service: BuildersService, private alerts: ToastrService) { }

  ngOnInit() {
    this.service.GetALlCompanies().subscribe((res) => {
      this.CompanyList = res;
    })
    this.service.GetALlRoles().subscribe((res) => {
      this.RoleList = res;
    })
  }
  CompanyID_Changed() {
    this.ModuleList = [];
    this.service.GetModuleByCompany(this.CompanyID).subscribe((res) => {
      this.ModuleList = res;
    })
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
  sources_Change() {
    this.service.GetViewsByTRXTypeID(this.SelectedTRXType.TRXTypeID).subscribe((res) => {
      this.viewsList = res;
    })
  }
  View_Change() {
    this.service.GetRolesByView(this.selectedView.ViewID).subscribe((res) => {
      this.RoleViewList = res;
      this.RoleList.forEach(col => {
        col.checked = false;
        this.RoleViewList.forEach(Usercol => {
          if (Usercol.RoleID == col.RoleID)
            col.checked = true;
        })
      })
    })
  }
  ApplyRole(role) {
    this.CM00072.RoleID = role.RoleID;
    this.CM00072.ViewID = this.selectedView.ViewID;
    if (role.checked) {
      this.service.SaveViewRole(this.CM00072)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(`${res.Massage}`);
        });
    }
    else {
      this.service.DeleteViewRole(this.CM00072)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(`${res.Massage}`);
        });
    }
  }
}
