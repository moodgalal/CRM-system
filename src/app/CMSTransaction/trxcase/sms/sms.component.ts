import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  testData: Array<any>;
  constructor() { }

  ngOnInit() {
  }

  goBack()
  {
    window.history.back();
  }
}
