import { Component, OnInit } from '@angular/core';
import { CompanyModulesService } from "./CompanyModules.service";
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-company-modules',
  templateUrl: './company-modules.component.html',
  styleUrls: ['./company-modules.component.scss'],
  providers: [CompanyModulesService]
})
export class CompanyModulesComponent implements OnInit {

    constructor(public Setting: PublicSetting, private service: CompanyModulesService, private alerts: ToastrService) { }
  CompanyList: Array<any> = [];
  ModuleList: Array<any> = [];
  CompanyID: string;
  Kaizen00101List: any[] = [];
  Kaizen00101: any = {};
  ngOnInit() {
      this.service.GetCompany().subscribe((res) => this.CompanyList = res);
      this.service.GetModules().subscribe((res) => { this.ModuleList = res; console.log(res);});
  }
  CompanyID_Changed(compnay) {
    
      this.service.GetCompanyModules(compnay).subscribe((res) => {
          console.log(res)
          this.ModuleList.forEach(col => {
              col.checked = false;
              res.forEach(item => {
                  if (item.ModuleID == col.ModuleID)
                      col.checked = true;
              });
          });
      });
  }
  addOrDelete(col) {
      col.checked = !col.checked;
      col.CompanyID = this.CompanyID;
      console.log(col);
      if (col.checked) {
          this.service.Save(col)
              .subscribe((res) => {
                  if (res.Status)
                      this.alerts.success(res.Massage);
                  else
                      this.alerts.error(`${res.Massage}`);
              });
      }
      else {
          this.service.DeleteData(col)
              .subscribe((res) => {
                  if (res.Status)
                      this.alerts.success(res.Massage);
                  else
                      this.alerts.error(`${res.Massage}`);
              });
      }
  }
}
