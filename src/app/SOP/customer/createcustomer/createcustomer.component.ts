import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.scss']
})
export class CreatecustomerComponent implements OnInit {
  value = null;
  testData = ['x', 'y', 'z'];
  constructor() { }

  ngOnInit() {
  }

  goBack()
  {
    window.history.back()
  }
}
