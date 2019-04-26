import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { GlobalGridService } from "../global-grid/global-grid.service";
import { ToastrService } from "ngx-toastr";
import { formatDate } from '@telerik/kendo-intl';
import { PublicSetting } from "../../models/PublicShared";
import { CMSShared } from '../../providers/CMS/CMSShared';

@Component({
  selector: 'app-global-filter',
  templateUrl: 'global-filter.component.html',
  styleUrls: ['global-filter.component.scss'],
  providers: [GlobalGridService]
})
export class GlobalFilterComponent implements OnInit, OnChanges {
  operators = [
    { name: '~', operator: '~' },
    { name: '=', operator: '=' },
    { name: '<', operator: '<' },
    { name: '>', operator: '>' },
    { name: 'Contain', operator: 'cont' },
  ];

  constructor(public settings: PublicSetting, public CMSShared: CMSShared, private service: GlobalGridService, private alerts: ToastrService) { }

  @Input() columns: any;
  @Output() FilterOnchanged: EventEmitter<string> = new EventEmitter();
  @Output() closeFilterEvent = new EventEmitter();
  @Input() SmartfilterObject: any = { FilterServerArray: [], FilterDisplayArray: [] };


  CaseStatusList: Array<any> = [];
  public SelectedCaseStatusID: any = [];
  SelectedFilterCol: any = {};
  SelectedOperator;
  IsCaseStatus: boolean = false;
  childStatus: Array<any> = [];
  selectedChildStatus: any = [];


  SelectedLookup01: Array<any> = null;
  SelectedLookup02: Array<any> = null;
  filterableColumns: Array<any> = [];


  ngOnChanges(changes: SimpleChanges) {
    this.columns = changes.columns.currentValue;
    this.filterableColumns = this.columns.filter((s) => s.IsFilterable);
  }

  ngOnInit() {
    this.displayString = this.SmartfilterObject.FilterDisplayArray.join(' ');
    console.log(this.displayString);
    if (this.SmartfilterObject.FilterDisplayArray.length > 0)
      this.currentState = 4;
  }


  public displayString: string = null;
  public someWrong: boolean = false;


  public CMSLookup01: Array<any>;
  public CMSLookup02: Array<any>;
  value: string = null;
  currentState: number = 1;

  Collumn_Change(event)  //state 1
  {
    this.IsCaseStatus = false;
    this.currentState = 2;
    if (event.FieldTypeID == 55 || event.FieldTypeID == 56 || event.FieldTypeID == 57) {
      this.IsCaseStatus = true;
      this.LoadStatusList();
    }
    switch (event.FieldTypeID) {
      case 51:
        this.service.GetCMSLookup01()
          .subscribe((res) => {
            this.CMSLookup01 = res;
          }, (err) => { });
        break;
      case 52:
        this.service.GetCMSLookup02()
          .subscribe((res) => {
            this.CMSLookup02 = res;
          }, (err) => {
            this.serverError(err)
          });
        break;
    }
    let displayFormat: string = `"` + event.FieldDisplay + `"`;
    this.SmartfilterObject.FilterDisplayArray.push(displayFormat);
    this.SmartfilterObject.FilterServerArray.push(event.FieldName + '_' + event.FieldTypeID);

    this.displayString = this.SmartfilterObject.FilterDisplayArray.join(' ');
    this.SelectedOperator = null;
  }
  Operator_Changed(char: string) //state 2
  {
    this.currentState = 3;
    this.SmartfilterObject.FilterDisplayArray.push(char);
    this.displayString = this.SmartfilterObject.FilterDisplayArray.join(' ');

    this.SmartfilterObject.FilterServerArray.push(char);

    if (this.isBalanced()) {

    }
  }
  arrayPushValue(val)  //state 3
  {
    this.currentState = 4;
    if (this.SelectedFilterCol.FieldTypeID == 55 || this.SelectedFilterCol.FieldTypeID == 56 || this.SelectedFilterCol.FieldTypeID == 57) {
      if (this.selectedChildStatus.CaseStatusname != undefined) {
        let temp = this.SmartfilterObject.FilterDisplayArray[this.SmartfilterObject.FilterDisplayArray.length - 1];
        this.SmartfilterObject.FilterDisplayArray.splice(this.SmartfilterObject.FilterDisplayArray.length - 1, 1);
        this.SmartfilterObject.FilterDisplayArray.splice(this.SmartfilterObject.FilterDisplayArray.length - 1, 1);

        this.SmartfilterObject.FilterServerArray.splice(this.SmartfilterObject.FilterDisplayArray.length - 1, 1);
        this.SmartfilterObject.FilterServerArray.splice(this.SmartfilterObject.FilterDisplayArray.length - 1, 1);

        let displayFormat: string = `"` + this.selectedChildStatus.CaseStatusname + `"`;
        this.SmartfilterObject.FilterDisplayArray.push(displayFormat);
        this.displayString = this.SmartfilterObject.FilterDisplayArray.join(' ');
        if (this.SelectedFilterCol.FieldTypeID = 55)
          this.SmartfilterObject.FilterServerArray.push('CaseStatusChild_58');
        if (this.SelectedFilterCol.FieldTypeID = 56)
          this.SmartfilterObject.FilterServerArray.push('LastCasStatusChldID_59');
        if (this.SelectedFilterCol.FieldTypeID = 57)
          this.SmartfilterObject.FilterServerArray.push('MidCasStatusChld_60');
        this.Operator_Changed(temp);
        val = this.selectedChildStatus.CaseStatusID;
      } else {
        val = this.SelectedCaseStatusID.CaseStatusID;
      }
    }
    switch (this.SelectedFilterCol.FieldTypeID) {
      case 24:
        this.value = val;
        //this.service.GetCMSLookup01()
        //    .subscribe((res) => {
        //        this.CMSLookup01 = res;
        //    }, (err) => { })
        break;
      case 51:
        this.service.GetCMSLookup02()
          .subscribe((res) => {
            this.CMSLookup02 = res;
          }, (err) => {
            this.serverError(err)
          })
        break;
    }
    let displayFormat: string = (this.SelectedFilterCol.FieldTypeID == 2 || this.SelectedFilterCol.FieldTypeID == 13) ? `"` + formatDate(val, "dd-MM-yyyy") + `"` : `"` + this.value + `"`;
    this.SmartfilterObject.FilterDisplayArray.push(displayFormat);
    this.displayString = this.SmartfilterObject.FilterDisplayArray.join(' ');

    let serverFormat: string = (this.SelectedFilterCol.FieldTypeID == 2 || this.SelectedFilterCol.FieldTypeID == 13) ? formatDate(val, "dd-MM-yyyy") : this.value;
    this.SmartfilterObject.FilterServerArray.push(serverFormat);
    this.SelectedFilterCol = {};
    this.SelectedOperator = null;
    //this.value = null;
  }
  LoadStatusList() {
    if (CMSShared.StatusList.length == 0) {
      this.service.GetCaseStatusList().subscribe((res) => {
        CMSShared.StatusList = res;
        this.LoadStatusListDropDownList();
      })
    } else {
      this.LoadStatusListDropDownList();
    }
  }
  LoadStatusListDropDownList() {
    CMSShared.StatusList.forEach(item => {
      if (this.SelectedFilterCol.FieldTypeID == 55) {
        if (item.CaseStatusTypeID == 1 && item.CaseStatusParent == null) {
          this.CaseStatusList.push(item)
        }
      }
      if (this.SelectedFilterCol.FieldTypeID == 56) {
        if (item.CaseStatusTypeID == 2 && item.CaseStatusParent == null) {
          this.CaseStatusList.push(item)
        }
      }
      if (this.SelectedFilterCol.FieldTypeID == 57) {
        if (item.CaseStatusTypeID == 3 && item.CaseStatusParent == null) {
          this.CaseStatusList.push(item)
        }
      }
    })
  }
  status_Change() {
    this.childStatus = [];
    if (this.SelectedCaseStatusID.IsHasChild) {
      CMSShared.StatusList.map(status => {
        if (status.CaseStatusParent == this.SelectedCaseStatusID.CaseStatusID) {
          this.childStatus.push(status);
        }
      });
    }
  }



  arrayPushBrackets(char: string) {
    this.SmartfilterObject.FilterDisplayArray.push(char);
    this.displayString = this.SmartfilterObject.FilterDisplayArray.join(' ');

    this.SmartfilterObject.FilterServerArray.push(char);

    this.isBalanced();
  }


  arrayPushConcat(char: string)  //state 4
  {
    console.log(char);
    this.currentState = 1;
    //alert(char);
    this.SmartfilterObject.FilterDisplayArray.push(char);
    this.displayString = this.SmartfilterObject.FilterDisplayArray.join(' ');
    if (char == '&')
      this.SmartfilterObject.FilterServerArray.push("ZOZO");
    else
      this.SmartfilterObject.FilterServerArray.push(char);

    this.isBalanced();
  }
  arrayPop() {
    if (this.currentState >= 1) {
      let el = this.SmartfilterObject.FilterDisplayArray.pop();
      this.displayString = this.SmartfilterObject.FilterDisplayArray.join(' ');

      this.SmartfilterObject.FilterServerArray.pop();
      if (el == '|' || el == '&')
        this.currentState = 4;
      else
        this.currentState--;

      this.isBalanced();
    }
  }
  arrayClear() {
    this.currentState = 1;
    this.SmartfilterObject = {};
    this.SmartfilterObject.FilterDisplayArray = [];
    this.SmartfilterObject.FilterServerArray = [];

    this.displayString = null;

    this.someWrong = false;
    this.value = null;
  }
  countInArray(array, what) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === what) {
        count++;
      }
    }
    return count;
  }

  isBalanced(): void {
    let right = this.countInArray(this.SmartfilterObject.FilterDisplayArray, '(');
    let left = this.countInArray(this.SmartfilterObject.FilterDisplayArray, ')');

    this.someWrong = right !== left;
  }

  serverError(err) {
    this.alerts.error(err);
  }

  public DoFilter() {
    this.FilterOnchanged.emit(this.SmartfilterObject);
  }
  public ClearFilter() {
    this.arrayClear();
    this.FilterOnchanged.emit(this.SmartfilterObject);
  }
  closeFilter() {
    this.closeFilterEvent.emit(this.SmartfilterObject);
  }
}
