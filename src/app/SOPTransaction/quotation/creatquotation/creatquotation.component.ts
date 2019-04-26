import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creatquotation',
  templateUrl: './creatquotation.component.html',
  styleUrls: ['./creatquotation.component.scss']
})
export class CreatquotationComponent implements OnInit {
  value = null;
  testData = ['x', 'y', 'z'];
  constructor() { }

  ngOnInit() {
  }

}
