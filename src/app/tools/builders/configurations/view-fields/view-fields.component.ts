import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BuildersService} from "../../builders-service.service";
import {ToastrService} from "ngx-toastr";
import {PublicSetting} from "../../../../models/PublicShared";

@Component({
  selector: 'app-view-fields',
  templateUrl: './view-fields.component.html',
  styleUrls: ['./view-fields.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [BuildersService]
})
export class ViewFieldsConfComponent implements OnInit {

  constructor(public Setting: PublicSetting,private service: BuildersService, private alerts: ToastrService) { }
  CompanyList: Array<any> = [];
  CompanyID;
  ModuleList: Array<any> = [];
  ModuleID;
  WindowSourceList: Array<any> = [];
  WindowSource;
  sources: Array<any> = [];
  sourceColumns: Array<any> = null;
  SelectedTRXType: any;

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

    this.service.GetDSColumns(this.SelectedTRXType.TRXTypeID).subscribe((res) => {
      this.sourceColumns = res;
      this.sourceColumns.forEach(col => {
        col.checked = false;
      })
    })
  }


  SaveData(col)
  {
      this.service.UpdateCM00074(col).subscribe(
          (res) => {
              if (res.Status) this.alerts.success(res.Massage);
              else this.alerts.error(res.Massage);
          }, (err) => this.alerts.error('Error please try again later '));
      console.log(col)
  }
}
