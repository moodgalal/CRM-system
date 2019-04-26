import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { DashboardService } from './DashboardService'
import {PublicShared} from "../models/PublicShared";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public PublicShared = PublicShared;
  @ViewChild("componentsContainer") componentsContainer;
  CMS_StaffTotal: any = {};
  constructor(private service: DashboardService) { }

  ngOnInit() {
    //console.log(this.PublicShared.serverComponents);
    //console.log(this.PublicShared.myDashboards);
    //this.service.GetMyAgentTotal().subscribe(res => {
    //  this.CMS_StaffTotal = res;
    //});


  }
  ngAfterViewInit(){ }

  public selectedDashboard(dashboardObject) {
    this.getDashbaordCompoenents(dashboardObject.DashboardCode);
  }

  public getDashbaordCompoenents(dashboardCode) {
    this.service.GetDashBoardReports(dashboardCode).subscribe((res: any) => {
      console.log(res);
      PublicShared.serverComponents = res;

    }, (err) => {
      console.log(err);
    })
  }

}
