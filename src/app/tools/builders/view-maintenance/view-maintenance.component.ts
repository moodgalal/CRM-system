import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {BuildersService} from "../builders-service.service";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-view-maintenance',
  templateUrl: './view-maintenance.component.html',
  styleUrls: ['./view-maintenance.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers : [BuildersService]
})
export class ViewMaintenanceComponent implements OnInit {

  constructor(public Setting: PublicSetting,private service : BuildersService , private alerts : ToastrService) { }

  sources : Array<any> = [];
  SelectedTRXType: any;
  views : Array<any> = null;
  viewTypes : Array<any> = null;

  selectedView : any = {};

  ngOnInit() {
    this.getDataSources();
    this.getViewTypes();
  }

  getDataSources() {
    this.service.getDataSource().subscribe((res) => {
      this.sources = res;
    })
  }
  getViews(event) {
    console.log(event);
    this.service.GetViewsByTRXTypeID(this.SelectedTRXType.TRXTypeID)
      .subscribe((res) => {
        this.views = res;
      })
  }
  getViewTypes() {
    this.service.GetViewTypes()
      .subscribe((res) => {
        this.viewTypes = res;
      })
  }

  editColumn(view)
  {
     this.selectedView = view;
  }

  updateColumn()
  {
    this.service.UpdateView(this.selectedView)
        .subscribe((res)=>
        {
          this.alerts.success("View Updated Successfully");
          //this.getViews(this.selectedSource);
        },(err)=>
        {
          this.alerts.error("Try Again Later Please")
        })
  }
  addColumn()
  {
    this.service.SaveCaseTypeView(this.selectedView)
        .subscribe((res)=>
        {
          this.alerts.success("View Updated Successfully");
         // this.getViews(this.selectedSource);
        },(err)=>
        {
          this.alerts.error("Try Again Later Please")
        })
  }
  deleteColumn(view)
  {
     this.service.DeleteView(view)
         .subscribe((res)=>
         {
            this.alerts.error("View Deleted Successfully");
            // this.getViews(this.selectedSource);
         },(err)=>
         {
            this.alerts.error("Try Again Later Please")
         })
  }
  goBack()
  {
    window.history.back()
  }

}
