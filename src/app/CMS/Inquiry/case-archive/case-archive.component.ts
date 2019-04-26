import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-archive',
  templateUrl: './case-archive.component.html',
  styleUrls: ['./case-archive.component.scss']
})
export class CaseArchiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public checked: boolean = false;
  public value: Date = new Date(2000, 2, 10);
}
