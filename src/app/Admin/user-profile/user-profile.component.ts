import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  value = null;
  testData = ['x', 'y', 'z'];
  constructor() { }

  ngOnInit() {
  }

}
