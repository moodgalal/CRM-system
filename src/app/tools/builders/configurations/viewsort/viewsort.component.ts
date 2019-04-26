import { Component, OnInit } from '@angular/core';
import {BuildersService} from "../../builders-service.service";
import {PublicSetting} from "../../../../models/PublicShared";

@Component({
  selector: 'app-viewsort',
  templateUrl: './viewsort.component.html',
  styleUrls: ['./viewsort.component.scss'],
  providers: [BuildersService]
})
export class ViewsortConfComponent implements OnInit {

  showDoAction: boolean = false;
  showCaseAttachment: boolean = false;
  sources : Array<any> = [];
  columns : Array<any> = null;
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


  getColumns(event)
  {
    this.service.GetDSColumns(event)
      .subscribe((res)=>
      {
        this.columns = res;
      })
  }


  sortChanged(sortObject)
  {
    console.log(sortObject)
  }
}
