import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-global-order',
  templateUrl: './global-order.component.html',
  styleUrls: ['./global-order.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GlobalOrderComponent implements OnInit {

  @Input() columns : Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
