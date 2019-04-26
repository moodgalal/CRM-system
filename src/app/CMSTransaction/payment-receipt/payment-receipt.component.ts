import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-receipt',
  templateUrl: './payment-receipt.component.html',
  styleUrls: ['./payment-receipt.component.scss']
})
export class PaymentReceiptComponent implements OnInit {
  testData = ['x', 'y', 'z'];
  constructor() { }

  ngOnInit() {
  }
  getValue(event) {
    console.log(event);
  }
}
