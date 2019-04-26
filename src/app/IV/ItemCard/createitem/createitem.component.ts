import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.scss']
})
export class CreateitemComponent implements OnInit {
  testData = ['x', 'y', 'z'];
  constructor() { }

  ngOnInit() {
  }

  goBack()
  {
    window.history.back()
  }
}
