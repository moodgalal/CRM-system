import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creatinquiry',
  templateUrl: './creatinquiry.component.html',
  styleUrls: ['./creatinquiry.component.scss']
})
export class CreatinquiryComponent implements OnInit {
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
