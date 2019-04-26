import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BuildersService } from "../builders-service.service";
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-viewsfields',
  templateUrl: 'viewsfields.component.html',
  styleUrls: ['viewsfields.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [BuildersService]
})
export class ViewsfieldsComponent implements OnInit {
  constructor(public Setting: PublicSetting,private service: BuildersService, private alerts: ToastrService) { }
  CompanyList: Array<any> = [];
  CompanyID;
  ModuleList: Array<any> = [];
  ModuleID;
  WindowSourceList: Array<any> = [];
  WindowSource;
  sources: Array<any> = [];
  viewsList: Array<any> = [];
  viewColumns: Array<any> = [];
  sourceColumns: Array<any> = null;
  checkedColumns: Array<any> = [];
  SelectedTRXType: any;
  selectedView: any;

  ngOnInit() {
    this.sourceColumns = [];
    this.service.GetALlCompanies().subscribe((res) => {
      this.CompanyList = res;
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
    this.viewColumns = [];
    this.viewsList = [];
    this.service.GetDSColumns(this.SelectedTRXType.TRXTypeID).subscribe((res) => {
      this.sourceColumns = res;
      this.sourceColumns.forEach(col => {
        col.checked = false;
      })
    });
    this.service.GetViewsByTRXTypeID(this.SelectedTRXType.TRXTypeID).subscribe((res) => {
      this.viewsList = res;
    })
  }
  getViewColumns() {
    this.sourceColumns.forEach(col => {
      col.checked = false;
    });

    this.service.getColumns(this.selectedView.ViewID).subscribe((res) => {
      if (res == null) return;
      if (res.length == 0) return;
      this.viewColumns = res;
      this.sourceColumns.forEach(col => {
        col.checked = false;
        this.viewColumns.forEach(viwcolm => {
          if (col.FieldName.trim() === viwcolm.FieldName.trim()) {
            col.checked = true;
            col.IsRequired = viwcolm.IsRequired;
            col.FieldDisplay = viwcolm.FieldDisplay;
            col.FieldOrder = viwcolm.FieldOrder;
            col.FieldWidth = viwcolm.FieldWidth;
            col.IsEmailable = viwcolm.IsEmailable;
            //col.FieldEquation = viwcolm.FieldEquation;
            col.IsPrintable = viwcolm.IsPrintable;
            col.IsActive = viwcolm.IsActive;
            col.Islocked = viwcolm.Islocked;
            col.Islockable = viwcolm.Islockable;
            col.IsFilterable = viwcolm.IsFilterable;
            col.IsSortable = viwcolm.IsSortable;
          }
        });
      });
    })

  }
  SaveData(col) {
    col.ViewID = this.selectedView.ViewID;
    this.service.UpdateViewsFields(col)
      .subscribe((res) => {
        if (res.Status)
          this.alerts.success(res.Massage);
        else
          this.alerts.error(`${res.Massage}`);
      });
  }
  addOrDelete(col) {
    col.checked = !col.checked;
    col.ViewID = this.selectedView.ViewID;
    if (col.checked) {
      this.service.SaveViewsField(col)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(`${res.Massage}`);
        });
    }
    else {
      this.service.DeleteViewsField(col)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(`${res.Massage}`);
        });
    }
  }
  GetCaseDoAction() {
    console.log('getting caseDoAction ...');
  }
}
