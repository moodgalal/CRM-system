import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss']
})
export class FeesComponent implements OnInit {
  @Input() CaseMain: any;
  testData = ['x', 'y', 'z'];
  @Output('hideMe') hideMe = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  getValue(event){
    console.log(event);
  }

  hideThisComponent() {
    this.hideMe.emit(true);
  }
  save() {
    console.log('save...');
  }

}
