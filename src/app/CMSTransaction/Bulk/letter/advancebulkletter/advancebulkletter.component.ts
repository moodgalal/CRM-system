import { Component, OnInit } from '@angular/core';
import { PublicSetting, PublicShared } from "../../../../models/PublicShared";
import { GridData } from "../../../../models/data-model";
import { LettersService } from '../Letters.service';
import { CMSShared } from '../../../../providers/CMS/CMSShared';
@Component({
  selector: 'app-advancebulkletter',
  templateUrl: './advancebulkletter.component.html',
  styleUrls: ['./advancebulkletter.component.scss'],
  providers: [LettersService]
})
export class AdvancebulkletterComponent implements OnInit {
  dataSourcesTmp = [];
  viewList: Array<any> = null;
  TemplateList: Array<any> = null;
  SelectedDataSource: any;
  selectedView: any = {};
  SelectedTemplate: any = {};
  DataSource: GridData = null;
 datatable: Array<any> = null;
  viewerContainerStyle = {
    position: 'absolute',
    top: '37px',
    bottom: '5px',
    width: '100%',
    height: '100vh',
    zIndex: '10',
    left: '5px',
    right: '5px',
    overflow: 'hidden',
    ['font-family']: 'ms sans serif'
  };
  CurrentAddressType;
  showaAdvancedFilter: boolean;
  ShowReport: boolean = false;
  serviceUrl;
  filterStatusList = [];
  childStatus = [];
  selectedStatusType: any = {};
  selectedStatus: any = {};
  selectedChildStatus: any = {};
  constructor(public Setting: PublicSetting, private Server: LettersService, public CMSShared: CMSShared) {
    this.serviceUrl = PublicShared.AppSeverPath + '/api/reports';
  }

  ngOnInit() {
    this.dataSourcesTmp = this.Setting.DataSources.filter((s) => s.TableSource.trim() === 'CM00203');

    this.CMSShared.GetCaseStatusTypeList();
    this.CMSShared.GetCaseStatusList();
  }
  getViews(event) {
    this.GetTemplates();
    this.Server.GetMyViewsByTRXTypeID(this.SelectedDataSource.TRXTypeID).subscribe((res) => {

        this.viewList = res;
      })
  }
  GetTemplates() {
    this.Server.GetTemplates(this.SelectedDataSource.TRXTypeID).subscribe((res) => {
      this.TemplateList = res;
    })
  }
  getDataGrid(event) {
    this.Server.getGridData(this.selectedView.ViewID, 100, 1, '', '', '', '').subscribe((res) => {
      this.DataSource = res;
      this.datatable = this.DataSource.Items;
      this.datatable.map(status => {
        status.IsSelected = false;
      });
      console.log(this.DataSource.Items);
    })
  }
  actionTypeListChange(event) {
    this.childStatus = [];
    this.filterStatusList = [];
    this.selectedStatus = {};
    CMSShared.StatusList.map(status => {
      if (status.StatusActionTypeID == this.selectedStatusType.StatusActionTypeID && status.CaseStatusParent == null)
        this.filterStatusList.push(status);
    });
  }
  status_Change() {
    this.childStatus = [];
    if (this.selectedStatus.IsHasChild) {
      CMSShared.StatusList.map(status => {
        if (status.CaseStatusParent == this.selectedStatus.CaseStatusID) {
          this.childStatus.push(status);
        }
      });
    }
  }
  ApplyShowReport() {
    this.ShowReport = false;
    setTimeout(() => { // This timer is for testing
      this.ShowReport = true;
    }, 300);
  }
  ready() { console.log('ready'); }
  viewerToolTipOpening(e: any, args: any) { console.log('viewerToolTipOpening ' + args.toolTip.text); }

  setAgentId(event) {
    console.log(event)
  }
}
