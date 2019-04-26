import { Component, OnInit } from '@angular/core';

import { StatusCaseColumns } from '../StatusCase.columns';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
import { StatusCaseService } from '../StatusCase.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-main-status-case',
  templateUrl: './main-status-case.component.html',
  styleUrls: ['./main-status-case.component.scss'],
  providers: [StatusCaseService]
})
export class MainStatusCaseComponent implements OnInit {
    openStatusType: boolean = false;
    CM00003: any = {};
    constructor(
        private Setting: PublicSetting,
        private alert: ToastrService,
        private service: StatusCaseService
    ) {
        PublicShared.MainGridURL = 'CMS/StatusCase/GetPageing';
        this.Setting.gridColumns = StatusCaseColumns.StatusCaseColumns;
    }
  ngOnInit() {
  }
  addStatusType() {
      this.service.AddStatusType(this.CM00003).subscribe(
          (res) => {
              if (res.Status) {
                  this.alert.success(res.Massage);
              } else {
                  this.alert.error(res.Massage);

              }
          }, (err) => this.alert.error(`Error Please try again later `));
  }
}
