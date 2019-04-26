import { Component, OnInit } from '@angular/core';
import { PublicSetting } from '../../../../models/PublicShared';
import { CMSShared } from '../../../../providers/CMS/CMSShared';
import { doactionService } from '../../../doaction/doaction.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-doactionbulk',
    templateUrl: './doactionbulk.component.html',
    styleUrls: ['./doactionbulk.component.scss'],
    providers: [doactionService]
})
export class DoactionbulkComponent implements OnInit {
    selectedStatusType;
    selectedStatus: any = {};
    selectedChildStatus: any = {};
    filterStatusList = [];
    childStatus = [];
    scriptingList = [];
    htmlFieldsList = [];
    taskList = [];
    dynamicDropDownList = [];
    ruleCondition = '';
    CaseRef: any;
    TRXTypeID: any;
    transNumber: any;

    saveOne : boolean = null;
    saveTwo : boolean = null;

    constructor(private activeRoute: ActivatedRoute,
                public Setting: PublicSetting,
                public CMSShared: CMSShared,
                private SRV: doactionService) { }

    ngOnInit()
    {
        this.CaseRef = this.activeRoute.snapshot.paramMap.get("caseRef");
        this.TRXTypeID = Number(this.activeRoute.snapshot.paramMap.get("trxTypeId"));
        this.transNumber = this.activeRoute.snapshot.paramMap.get("transNum");

        if (this.CaseRef !== null && this.TRXTypeID !== null && this.transNumber == null)
        {
           this.saveOne = true;
           this.saveTwo = false;
        }
        else if ( this.transNumber !== null && this.CaseRef == null && this.TRXTypeID == null)
        {
            this.saveOne = false;
            this.saveTwo = true;
        }
    }
    actionTypeListChange(event  ) {
        this.childStatus = [];
        this.scriptingList = [];
        this.htmlFieldsList = [];
        this.taskList = [];
        this.filterStatusList = [];
        this.selectedStatus = {};
        //this.selectedChildStatus = null;
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
            this.SRV.GetWorkableFields(this.selectedStatus.CaseStatusID).subscribe(res => {
                this.htmlFieldsList = res;
                this.htmlFieldsList.map(field => {
                    field.FieldDateValue = null;
                    if (field.FieldTypeID == 1) {
                        console.log(`id one`);
                        this.SRV.GetGetAllLookup4WorkableFields(this.selectedStatus.CaseStatusID).subscribe(res => {
                            this.dynamicDropDownList = res;
                        });
                        return;
                    }
                });
            });
        }
        if (this.selectedStatus.IsTaskList) {
            this.SRV.GetTaskList(this.selectedStatus.CaseStatusID).subscribe(res => {
                this.taskList = res;
                this.taskList.map(item => {
                    item.IsExpanded = false;
                    item.AssignDate = null;
                    item.TaskStartDate = null;
                    item.TaskEndDate = null;
                });
            })
        }
    }
    scriptListChange(event) {
        this.ruleCondition = event.StatusScriptMain;
    }
    public valueChange(): void {
        console.log("Component is blurred");
        alert('valueChange');
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

    firstSave()
    {
      console.log("first save function")
    }

    secondSave()
    {
        console.log("second save function")
    }
    save() {
      console.log('save ...');
    }
}
