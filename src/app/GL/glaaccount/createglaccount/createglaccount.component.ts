import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createglaccount',
  templateUrl: './createglaccount.component.html',
  styleUrls: ['./createglaccount.component.scss']
})
export class CreateglaccountComponent implements OnInit {
  value = null;
  testData = ['x', 'y', 'z'];
  constructor() { }

  ngOnInit() {
  }

}
