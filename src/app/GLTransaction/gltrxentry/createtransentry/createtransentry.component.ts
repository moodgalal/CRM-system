import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createtransentry',
  templateUrl: './createtransentry.component.html',
  styleUrls: ['./createtransentry.component.scss']
})
export class CreatetransentryComponent implements OnInit {
  value = null;
  testData = ['x', 'y', 'z'];
  isHiddenRow : boolean = false;
  digitNum : number = 3;
  constructor() { }

  ngOnInit() {
  }

  hideRow()
  {
    this.isHiddenRow = !this.isHiddenRow;
  }

  makeThree()
  {
    this.digitNum = 3;
  }

  makeZero()
  {
    this.digitNum = 0;
  }
  makeOne()
  {
    this.digitNum = 1;
  }
  makeTwo()
  {
    this.digitNum = 2;
  }
}
