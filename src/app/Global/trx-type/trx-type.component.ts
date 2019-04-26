import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trx-type',
  templateUrl: './trx-type.component.html',
  styleUrls: ['./trx-type.component.scss']
})
export class TrxTypeComponent implements OnInit {
  sources: Array<any> = [];
  SelectedTRXType: any;
  constructor() { }

  ngOnInit() {
  }

}
