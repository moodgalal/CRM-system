import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PublicSetting, PublicShared } from "../../../models/PublicShared";
import { doactionService } from "../../doaction/doaction.service";
import { ToastrService } from "ngx-toastr";
import { CMSShared } from '../../../providers/CMS/CMSShared';
import { TrxCaseService } from '../trxCase.service';

@Component({
  selector: 'app-doactioncase',
  templateUrl: './doactioncase.component.html',
  styleUrls: ['./doactioncase.component.scss'],
  providers: [doactionService, TrxCaseService]
})
export class DoactioncaseComponent implements OnInit {
  @Output('DoAction_Change_Fire') DoAction_Change_Fire = new EventEmitter();
  CM10701: any = {};
  selectedStatusType;
  selectedStatus: any = {};
  selectedChildStatus: any = {};


  selectedScript: any = {};
  filterStatusList = [];
  childStatus = [];
  scriptingList = [];
  htmlFieldsList = [];
  taskList = [];
  dynamicDropDownList = [];
  ruleCondition = '';
  CaseRef: any;
  TRXTypeID: any;

  constructor(public Setting: PublicSetting, public CMSShared: CMSShared, private SRV: doactionService, private TrxCaseService: TrxCaseService, private alerts: ToastrService) { }

  @Input() CaseMain: any;

  ngOnInit() {
    this.CMSShared.GetCaseStatusTypeList();
    this.CMSShared.GetCaseStatusList();
  }
  actionTypeListChange(event) {
    this.childStatus = [];
    this.scriptingList = [];
    this.htmlFieldsList = [];
    this.taskList = [];
    this.filterStatusList = [];
    this.selectedStatus = {};
    //this.selectedChildStatus = null;
    //console.log(CMSShared.StatusList);
    CMSShared.StatusList.map(status => {
      if (status.StatusActionTypeID == this.selectedStatusType.StatusActionTypeID && status.CaseStatusParent == null)
        this.filterStatusList.push(status);
    });
  }
  status_Change() {
    this.childStatus = [];
    this.scriptingList = [];
    this.htmlFieldsList = [];
    this.taskList = [];
    if (this.selectedStatus.IsHasChild) {
      CMSShared.StatusList.map(status => {
        if (status.CaseStatusParent == this.selectedStatus.CaseStatusID) {
          this.childStatus.push(status);
        }
      });
    }
    if (this.selectedStatus.IsScripting) {
      this.SRV.GetAllScriptsByCaseStatusID(this.selectedStatus.CaseStatusID).subscribe(res => {
        this.scriptingList = res;
      })
    }
    if (this.selectedStatus.StatusHTML) {
      if (this.CaseMain.LastCaseStatusID == this.selectedStatus.CaseStatusID) {
        this.SRV.GetWorkableFieldsByCaseRef(this.selectedStatus.CaseStatusID, this.CaseMain.CaseRef, this.CaseMain.TRXTypeID).subscribe(res => {
          this.htmlFieldsList = res;
          this.htmlFieldsList.map(field => {
            switch (field.FieldTypeID) {
              case 1:
                if (this.dynamicDropDownList.length == 0) {
                  this.SRV.GetGetAllLookup4WorkableFields(this.selectedStatus.CaseStatusID).subscribe(res => {
                    this.dynamicDropDownList = res;
                  });
                }
                field.DropdownlistFieldValue = field.FieldValue;
                break;
              case 2:
                if (field.FieldDateValue == '0001-01-01T00:00:00')
                  field.FieldDateValue = null;
                else
                  field.FieldDateValue = new Date(field.FieldDateValue);
                break;
            }
          });
        });
      } else {
        this.SRV.GetWorkableFields(this.selectedStatus.CaseStatusID).subscribe(res => {
          this.htmlFieldsList = res;
          this.htmlFieldsList.map(field => {
            field.FieldDateValue = null;
            if (field.FieldTypeID == 1) {
              this.SRV.GetGetAllLookup4WorkableFields(this.selectedStatus.CaseStatusID).subscribe(res => {
                this.dynamicDropDownList = res;
              });
              return;
            }
          });
        });
      }
    }
    if (this.selectedStatus.IsTaskList) {
      this.CMSShared.FillTaskTypesList();
      this.CMSShared.FillTaskPrioritiesList();
      this.SRV.GetTaskList(this.selectedStatus.CaseStatusID).subscribe(res => {
        this.taskList = res;
        this.taskList.map(item => {
          //item.TaskStartDate = new Date(item.TaskStartDate);
          //item.TaskEndDate = new Date(item.TaskEndDate);
          item.IsExpanded = false;
          item.AssignDate = new Date();
          item.TaskStartDate = new Date();
          item.TaskEndDate = new Date();
          //item.TaskEndDate.setDate(item.TaskStartDate.getDate() + item.RequiredDays);
          item.TaskEndMaxDate = item.TaskEndDate;
          item.AgentID = PublicShared.GetUserData.UserName;
       
        });
      })

    }
    if (this.selectedStatus.IsPTP) {
      this.CM10701.ReminderDateTime = new Date();
      this.CM10701.PTPAMT = 0;
      this.CM10701.MinDateTime = new Date();
      this.CM10701.MaxDateTime = new Date(this.CM10701.ReminderDateTime);
      this.CM10701.MaxDateTime.setDate(this.CM10701.MaxDateTime.getDate() + 30);
    }
  }
  scriptListChange(event) {
    this.CM10701.CaseStatusComment = event.StatusScriptMain;
  }
  public valueChange(): void {
    console.log("Component is blurred");
    //alert('valueChange');
  }

  getDynamicDropdownSRC(fieldName): Array<any> {
    let DataArr = [];
    this.dynamicDropDownList.forEach(field => {
      //console.log(field.FieldCode.trim());
      if (field.FieldCode.trim() === fieldName.trim()) {
        DataArr.push(field);
      }
    });
    return DataArr;
  }
  DynamicDropdown_Change(event, field) {
    //console.log(event);
    field.FieldValue = event.LookupID.trim() + "_zozo_" + event.LookupName;
    //field.FieldName = event.LookupName;
    //console.log(field.FieldValue);
  }
  save() {
    if (this.selectedStatus.IsHasChild && this.selectedChildStatus.CaseStatusID == undefined) {
      this.showErrMessage(this.selectedStatus.ChildName + " Is Required");
      return;
    }
    let isUpdate = false;
    if (this.selectedStatus.CaseStatusTypeID == 1) {
      if (this.CaseMain.CaseStatusID != this.selectedStatus.CaseStatusID) {
        isUpdate = true;
      } else if (this.CaseMain.CaseStatusChild == null && this.selectedChildStatus.CaseStatusID != undefined) {
        isUpdate = true;
      } else if (this.CaseMain.CaseStatusChild != this.selectedChildStatus.CaseStatusID) {
        isUpdate = true;
      }
    }
    if (this.selectedStatus.CaseStatusTypeID == 2) {
      if (this.CaseMain.LastCaseStatusID != this.selectedStatus.CaseStatusID || this.CaseMain.LastCasStatusChldID != this.selectedChildStatus.CaseStatusID) {
        isUpdate = true;
      }
    }
    if (this.selectedStatus.CaseStatusTypeID == 3) {
      if (this.CaseMain.MidCasStatusID != this.selectedStatus.CaseStatusID || this.CaseMain.MidCasStatusChld != this.selectedChildStatus.CaseStatusID) {
        isUpdate = true;
      }
    }
    this.CM10701.StatusActionTypeID = this.selectedStatus.StatusActionTypeID;
    this.CM10701.CaseStatusTypeID = this.selectedStatus.CaseStatusTypeID;
    this.CM10701.CaseStatusID = this.selectedStatus.CaseStatusID;
    this.CM10701.CaseStatusname = this.selectedStatus.CaseStatusname;
    this.CM10701.CaseStatusChild = this.selectedChildStatus.CaseStatusID;
    this.CM10701.CaseStatusChildName = this.selectedChildStatus.CaseStatusname;
    this.CM10701.StatusScriptID = this.selectedScript.StatusScriptID;
    this.CM10701.CaseRef = this.CaseMain.CaseRef;
    this.CM10701.TRXTypeID = this.CaseMain.TRXTypeID;
    this.CM10701.CIFNumber = this.CaseMain.CIFNumber;
    this.CM10701.CIFTRXTypeID = this.CaseMain.CIFTRXTypeID;
    this.TrxCaseService.AddCM10701(this.CM10701).subscribe(res => {
      if (res.Status) {
        this.showSuccessMessage(res.Massage);
        if (this.selectedStatus.IsPTP) {
          this.CaseMain.ReminderDateTime = this.CM10701.ReminderDateTime;
          this.CaseMain.PTPAMT = this.CM10701.PTPAMT;
        } else {
          this.CaseMain.ReminderDateTime = null;
          this.CaseMain.PTPAMT = 0;
        }
        this.CaseMain.LastActionDate = new Date();
        switch (this.selectedStatus.CaseStatusTypeID) {
          case 1:
            this.CaseMain.CaseStatusname = this.CM10701.CaseStatusname;
            this.CaseMain.CaseStatusChildName = this.CM10701.CaseStatusChildName;
            break;
          case 2:
            this.CaseMain.LastCasStatusname = this.CM10701.CaseStatusname;
            this.CaseMain.LastCasStatusChldNam = this.CM10701.CaseStatusChildName;
            break;
          case 3:
            this.CaseMain.MidCasStatusnam = this.CM10701.CaseStatusname;
            this.CaseMain.MidCasStatusChldName = this.CM10701.CaseStatusChildName;
            break;
        }
        this.CaseMain.CaseStatusComment = this.CM10701.CaseStatusComment;
        
      } else {
        this.showErrMessage(res.Massage);
      }
    });
    if (this.selectedStatus.StatusHTML) {
      if (this.CaseMain.LastCaseStatusID == this.selectedStatus.CaseStatusID) {
        this.TrxCaseService.UpdateWorkableFields(this.htmlFieldsList, this.CaseMain.CaseRef, this.CaseMain.TRXTypeID
          , this.selectedStatus.CaseStatusID, this.selectedChildStatus.CaseStatusID
          , this.selectedChildStatus.CaseStatusname, this.CM10701.CaseStatusComment
        ).subscribe(res => {
          if (res.Status) {
            this.showSuccessMessage(res.Massage);
          } else {
            this.showErrMessage(res.Massage);
          }
        });
      } else {
        this.TrxCaseService.SaveCaseHistoryData(this.htmlFieldsList
          , this.CaseMain.CaseRef, this.CaseMain.TRXTypeID
          , this.selectedStatus.CaseStatusID, this.selectedChildStatus.CaseStatusID
          , this.selectedChildStatus.CaseStatusname, this.CM10701.CaseStatusComment
        ).subscribe(res => {
          if (res.Status) {
            this.showSuccessMessage(res.Massage);
          } else {
            this.showErrMessage(res.Massage);
          }
        });
      }
    }
    if (this.selectedStatus.IsTaskList) {
      this.taskList.map(item => {
        if (item.TaskTypeID == undefined)
          item.TaskTypeID = this.CMSShared.TypesList[0].TaskTypeID;

        if (item.PriorityID == undefined)
          item.PriorityID = this.CMSShared.PrioritiesList[0].PriorityID;
      });

      this.TrxCaseService.SaveCaseTaskListData(this.taskList, this.CaseMain.CaseRef, this.CaseMain.TRXTypeID).subscribe(res => {
        if (res.Status) {
          console.log(res);
        } else {
          this.showErrMessage(res.Massage);
        }
      });
    }
  }

  showErrMessage(errBody) {
    this.alerts.error(`${errBody}`);
  }
  showSuccessMessage(msg) {
    this.alerts.success(`${msg}`);
  }


  hideThisComponent() {
    this.DoAction_Change_Fire.emit(true);
  }
}
