
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-field-creator',
  templateUrl: './global-field-creator.component.html',
  styleUrls: ['./global-field-creator.component.scss']
})
export class GlobalFieldCreatorComponent implements OnInit {

  @Input() FieldList : Array<any>;
  @Input() ExcelColumns : Array<any>;

  constructor() { }

  ngOnInit() {
    console.table(this.FieldList);
  }

}
