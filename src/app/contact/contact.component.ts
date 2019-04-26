import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
styles: [
    '.mat-card-header-text {margin: 10px auto;}'

  ];

  testData = ['x', 'y', 'z'];
  constructor() { }

  ngOnInit() {
  }

}
