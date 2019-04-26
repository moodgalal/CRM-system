import { Component, OnInit} from '@angular/core';
//import { CMSShared } from '../../../models/PublicShared';
import { CMSShared } from '../../../providers/CMS/CMSShared';
import { KaizenService } from '../../../providers/kaizen/kaizen.service';

@Component({
  selector: 'app-doactionAssignment',
  templateUrl: './DoactionAssignment.component.html',
  styleUrls: ['./DoactionAssignment.component.scss'],
})

export class DoactionAssignmentComponent implements OnInit{
  filterStatusList = [];
  childStatus = [];
  htmlFieldsList = [];
  selectedStatus:any = {};
  taskList = [];
  selectedStatusType: {StatusActionTypeID?:number};
  ActionTypeList;
  StatusTypeList;
  PrioritiesList;
  TypesList;
  ruleCondition = '';
  scriptingList;
  objectOfData: any = {};
  dynamicDropDownList: Array<any> = [];
  constructor(private _service: KaizenService) {
    //if (CMSShared.ActionTypeList.length > 0) {
    //  this.ActionTypeList = CMSShared.ActionTypeList;
    //} else {
    //  this.getActionTypeListData();
    //}
    if (CMSShared.StatusList.length > 0) {
      this.StatusTypeList = CMSShared.StatusList;
    } else {
      this.getStatusTypeListData();
    }

    //if (CMSShared.PrioritiesList.length > 0) {
    //  this.PrioritiesList = CMSShared.PrioritiesList;
    //} else {
    //  this.getPrioritiesListData();
    //}

    //if (CMSShared.TypesList.length > 0) {
    //  this.TypesList = CMSShared.TypesList;
    //} else {
    //  this.getTypesListData();
    //}
  }

  ngOnInit() { }


  getActionTypeListData() {
    //if (CMSShared.ActionTypeList.length <= 0) {
    //  this._service.GetCaseStatusTypeList().subscribe((res) => {
    //    console.log("GetCaseStatusTypeList");
    //    console.log(res);
    //    CMSShared.ActionTypeList = res;
    //    this.ActionTypeList = res;
    //  })
    //}
  }
  getStatusTypeListData() {
    //if (CMSShared.StatusList.length <= 0) {
    //  this._service.GetCaseStatusList().subscribe((res) => {
    //    console.log("GetCaseStatusList");
    //    console.log(res);
    //    CMSShared.StatusList = res;
    //    this.StatusTypeList = res;
    //  })
    //}
  }

  getPrioritiesListData() {
    //if (CMSShared.PrioritiesList.length <= 0) {
    //  this._service.FillTaskPrioritiesList().subscribe((res) => {
    //    console.log("FillTaskPrioritiesList");
    //    console.log(res);
    //    CMSShared.PrioritiesList = res;
    //    this.PrioritiesList = res;
    //  })
    //}
  }

  getTypesListData() {
    //if (CMSShared.TypesList.length <= 0) {
    //  this._service.FillTaskTypesList().subscribe((res) => {
    //    console.log("FillTaskTypesList");
    //    console.log(res);
    //    CMSShared.TypesList = res;
    //    this.TypesList = res;
    //  })
    //}
  }

  actionTypeListChange(event) {
    this.filterStatusList = [];
    console.log(event);
    this.StatusTypeList.map(status => {
      if (status.StatusActionTypeID == this.selectedStatusType.StatusActionTypeID) {
        console.log(status);
        this.filterStatusList.push(status);
      }
    });
    // this.selectedStatus = this.filterStatusList[0];
  }



  statusTypeListChange(event) {
    console.log(this.selectedStatus);
    this.childStatus = [];
    this.scriptingList = [];
    this.htmlFieldsList = [];
    this.taskList = [];

    if (event.IsHasChild) {
      this.StatusTypeList.map(status => {
        if (status.CaseStatusParent == event.CaseStatusID) {
          console.log(`----------------------------`);
          console.log(status);
          this.childStatus.push(status);
        }
      });
    }

    //if (event.IsScripting) {
    //  this._service.GetAllScriptsByCaseStatusID(event.CaseStatusID).subscribe(res => {
    //    console.log(res);
    //    this.scriptingList = res;
    //  })
    //}

    //if (event.StatusHTML) {
    //  this._service.GetWorkableFields(event.CaseStatusID).subscribe(res => {
    //    this.htmlFieldsList = res;
    //      this.htmlFieldsList.map(field => {
    //        field.FieldDateValue = null;
    //        if (field.FieldTypeID == 1) {
    //          console.log(`id one`);
    //          this._service.GetGetAllLookup4WorkableFields(event.CaseStatusID).subscribe(res => {
    //            console.log(res);
    //              this.dynamicDropDownList = res;
    //          });
    //          return;
    //        }

    //      });

    //  });
    //}

    //if (event.IsTaskList) {
    //  this._service.GetTaskList(event.CaseStatusID).subscribe(res => {
    //    console.log(res);
    //    this.taskList = res;
    //    this.taskList.map(item => {
    //      item.IsExpanded = false;
    //      item.AssignDate = null;
    //      item.TaskStartDate = null;
    //      item.TaskEndDate = null;
    //    });
    //  })
    //}
  }

  getDynamicDropdownSRC(fieldName): Array<any> {
    let DataArr = [];
    this.dynamicDropDownList.forEach(field => {
      if (field.FieldCode == fieldName) {
        DataArr.push(field);
      }
    });
    return DataArr;
  }

  slecetedTask(task) {
    console.log(task);
    task.IsExpanded = !task.IsExpanded;
  }

}
