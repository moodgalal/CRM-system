import { Component, OnInit } from '@angular/core';
import {BuildersService} from "../builders-service.service";
import {PublicSetting} from "../../../models/PublicShared";

@Component({
  selector: 'app-view-reorder',
  templateUrl: './view-reorder.component.html',
  styleUrls: ['./view-reorder.component.scss'],
  providers : [BuildersService]
})
export class ViewReorderComponent implements OnInit {

  showDoAction: boolean = false;
  showCaseAttachment: boolean = false;
  sources : Array<any> = [];
  views : Array<any> = [];
  columns : Array<any> = null;

  selectedView : any;
  CompanyList: Array<any> = [];
  CompanyID;
  ModuleList: Array<any> = [];
  ModuleID;
  WindowSourceList: Array<any> = [];
  WindowSource;
  SelectedTRXType: any;
  sourceColumns: Array<any> = null;

  constructor(private service : BuildersService,public Setting: PublicSetting) { }

  ngOnInit()
  {
    this.sourceColumns = [];
    this.service.GetALlCompanies().subscribe((res) => {
      this.CompanyList = res;
    });

    this.getDataSources();
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

  getDataSources()
  {
    this.service.getDataSource()
      .subscribe((res)=>
      {
        this.sources = res;
      })
  }
  getViews(event)
  {
    this.service.GetViewsByTRXTypeID(event)
      .subscribe((res)=>
      {
        this.views = res;
      })
  }

  getColumns(event)
  {
    this.selectedView = event;

    this.service.getColumns(event.ViewID)
      .subscribe((res)=>
      {
        this.columns = res;
      })
  }

  save()
  {
     console.log(this.columns)
  }
}
