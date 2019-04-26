import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckbookLookupColumns } from './checkbook-lookupColumns';
import { LookUpSetting } from '../../Global/lookupgrid/LoockUpSetting';

@Component({
  selector: 'app-check-book',
  templateUrl: './check-book.component.html',
  styleUrls: ['./check-book.component.scss']
})
export class CheckBookComponent implements OnInit {
  @Output() getValue = new EventEmitter();
  @Input() CurrencyCode: string;
  @Input() CheckbookCode: string;
  public opened: boolean = false;

  //username: string ;
  constructor(public LookUpSetting: LookUpSetting) { }

  ngOnInit() {
   // this.username = this.CheckbookCode;
  }
  openDialog(): void {
    this.LookUpSetting.gridColumns = CheckbookLookupColumns.CheckbookLookupColumns;
    this.LookUpSetting.ServerFuncName = "GetCheckbookGrid";
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  Select_Changed(dataItem) {
    this.opened = false;
    this.CheckbookCode = dataItem.CheckbookName;
    this.getValue.emit(this.CheckbookCode);
  }

}
