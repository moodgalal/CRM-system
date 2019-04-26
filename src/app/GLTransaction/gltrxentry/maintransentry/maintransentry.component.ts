import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintransentry',
  templateUrl: './maintransentry.component.html',
  styleUrls: ['./maintransentry.component.scss']
})
export class MaintransentryComponent implements OnInit {
  value = null;
  testData = ['x', 'y', 'z'];
  constructor() { }

  ngOnInit() {
  }

  sendSms()
  {
    console.log("Sms sent")
  }
}
