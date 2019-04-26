import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CMSShared} from "../../providers/CMS/CMSShared";
import {PublicSetting} from "../../models/PublicShared";

@Component({
  selector: 'app-global-sort',
  templateUrl: './global-sort.component.html',
  styleUrls: ['./global-sort.component.scss']
})
export class GlobalSortComponent implements OnInit {

  @Input() columns: any;
  @Output() sortOnChanged: EventEmitter<string> = new EventEmitter();
  @Output() closeSortEvent : EventEmitter<boolean> = new EventEmitter();

  sortObject: any = { sortServerArray: [], sortDisplayArray: [] };

  constructor(public settings: PublicSetting, public CMSShared: CMSShared) { }

  ngOnInit() {
  }


  // Sort variables and function

  displaySortArray: Array<string> = [];
  displaySortString: string = null;
  serverSortString: string = null;
  serverSortArray: Array<string> = [];
  pressSort: boolean = false;
  pressColumn: boolean = true;
  pressAnd: boolean = true;

  arrayPushFilterColumn(event) {
    this.pressSort = true;
    this.pressColumn = false;

    let displayFormat: string = event.FieldDisplay + `=>`;
    this.displaySortArray.push(displayFormat);
    this.displaySortString = this.displaySortArray.join(' ');

    this.serverSortArray.push(event.FieldName);
    this.serverSortString = this.serverSortArray.join();
  }
  arrayPushSort(op) {
    if (op == '&') {
      this.pressAnd = true;
      this.pressSort = false;
      this.pressColumn = true;
    }
    else {
      this.pressSort = true;
      this.pressColumn = true;
      this.pressAnd = false;
    }

    this.displaySortArray.push(op);
    this.displaySortString = this.displaySortArray.join(' ');

    this.serverSortArray.push(op);
    this.serverSortString = this.serverSortArray.join();
  }
  sortPop() {
    let el = this.displaySortArray.pop();
    this.displaySortString = this.displaySortArray.join(' ');

    this.serverSortArray.pop();
    this.serverSortString = this.serverSortArray.join();

    this.pressSort = el == 'desc' || el == 'asc' || el == '&';
    this.pressAnd = el !== '&';
    this.pressColumn = !this.pressSort || !this.pressAnd;
  }
  sortClear() {
    this.sortObject = {};
    this.sortObject.sortDisplayArray = [];
    this.sortObject.sortServerArray = [];
    this.displaySortArray = [];
    this.displaySortString = null;
    this.pressSort = false;
    this.pressColumn = true;
    this.pressAnd = true;
  }

  sortData() {
    console.log("display sort string");
    console.log(this.displaySortString);
    console.log("server sort string");
    console.log(this.serverSortString);

    this.sortObject.sortDisplayArray = this.displaySortArray;
    this.sortObject.sortServerArray =  this.serverSortArray;
  }

  public DoFilter() {
    this.sortData();
    this.sortOnChanged.emit(this.sortObject);
  }
  public ClearFilter() {
    this.sortClear();
    this.sortOnChanged.emit(this.sortObject);
  }
  closeFilter() {
    this.closeSortEvent.emit(true);
  }

}
