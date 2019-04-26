import { Component, OnInit } from '@angular/core';
import {BuildersService} from "../builders-service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-viewcondition',
  templateUrl: 'viewcondition.component.html',
  styleUrls: ['viewcondition.component.scss'],
  providers : [BuildersService]
})
export class ViewconditionComponent implements OnInit {
  showDoAction: boolean = false;
  showCaseAttachment: boolean = false;
  constructor(private service : BuildersService , private alerts : ToastrService) { }

  sources : Array<any> = [];
  views : Array<any> = [];
  columns : Array<any> = null;
  selectedView : any;
  ngOnInit()
  {
    this.getDataSources();
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
    console.log(event);
    this.service.GetViewsByTRXTypeID(event)
        .subscribe((res)=>
        {
          this.views = res;
        })
  }
  getColumns(event)
  {
    this.selectedView = event;

    console.log(event);
    this.service.getColumns(event.ViewID)
        .subscribe((res)=>
        {
          this.columns = res;
        })
  }

  createFilter(string)
  {


    this.selectedView.WhereCondition = string;

    this.service.UpdateViewsFields(this.selectedView)
        .subscribe((res)=>
        {
          this.alerts.success("Sorted Successfully");
        },()=>
        {
          this.alerts.error("Try Again Later please");
        })
  }
  GetCaseDoAction() {
    console.log('getting caseDoAction ...');
  }
}
