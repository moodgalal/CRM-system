import { Component, OnInit, Input, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { MainGridService } from "./MainGridService";
import { PublicSetting } from "../../models/PublicShared";
import { DataStateChangeEvent } from "@progress/kendo-angular-grid";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss'],
  providers: [MainGridService]
})
export class MainGridComponent implements OnInit {
  displaySortString;
  gridheight: number;
  show: boolean = false;
  @Input()
  extraButtons: TemplateRef<any>;

  @ViewChild("aboveGrid1") aboveGrid1: ElementRef;

  onResize(event) {
    this.gridheight = event.target.innerHeight - (this.aboveGrid1.nativeElement.offsetHeight + 105);
  }
  eventHandler: any;
  constructor(public Setting: PublicSetting, private service: MainGridService, private route: ActivatedRoute) {
    this.Setting.DataGrid = [];
    this.Setting.ViewList = [];
    this.Setting.state = {
      skip: 0,
      take: 5,
    };
    this.Setting.gridView = {
      data: [],
      total: 0
    };
  }
 
  ngOnInit() {
    this.Setting.DataGrid = [];
    this.Setting.CurrentWindowSrc = '';
    this.getGridData();
    this.gridheight = window.innerHeight - (this.aboveGrid1.nativeElement.offsetHeight + 105);
  }

  getGridData() {
    let sorting = "";
    if (this.Setting.Sort[0] != null)
      sorting = this.Setting.Sort[0].field + " " + this.Setting.Sort[0].dir;

    let MainGridFilter = this.Setting.FilterServerArray.join()
    this.Setting.DataGrid = [];
    this.Setting.Total = 0;
    this.service.GetDataGrid(this.Setting.state.take, this.Setting.state.skip, sorting, this.Setting.GridFilter, MainGridFilter, this.Setting.TxtSearch).subscribe((data) => {
      if (data !== null) {
        if (data.Items !== null) {
          this.Setting.DataGrid = data.Items;
          this.Setting.Total = data.TotalItemCount;
        }
      }
      this.Setting.loadDatGrid();
    }, (err) => { })
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.Setting.state = state;
    if (state.filter) {
      this.Setting.GridFilter = Object.values(state.filter.filters[0]).join('_');
      console.log(this.Setting.GridFilter);
    }
    //this.Setting.Skip = state.skip;
    //this.Setting.Sort = state.sort;
    //if (state.sort) {
    //    this.SortValues = Object.values(state.sort[0]).join('_');
    //    console.log(this.SortValues);
    //}
    this.getGridData();
  }

  captureStr(event) {
    console.log(event);
  }
  arrayPushFilterColumn(event) {
    console.log(event);
  }
  arrayPushSort(event) {
    console.log(event);
  }
  sortClear() {
    console.log('..');
  }
  sortData() {
    console.log('..');
  }
  sortPop() {
    console.log('..');
  }

}
