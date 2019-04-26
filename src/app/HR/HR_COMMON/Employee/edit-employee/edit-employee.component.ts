import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  value = null;
  testData = ['x', 'y', 'z'];
  constructor() {
    console.log(`!!!!!!!!!@@@@@@@@@@@@@@@@@@@!!!!!!!!!!!!!!!!!!!@@@@@@@@@@@@@@@!!!!!!!!!`);
  }

  ngOnInit() {
    console.log(`!!!!!!!!!@@@@@@@@@@@@@@@@@@@!!!!!!!!!!!!!!!!!!!@@@@@@@@@@@@@@@!!!!!!!!!`);
  }

  testEmp () {
    console.log('TEST EMP IS HERE');
  }

}
