import { Component, OnInit } from '@angular/core';
import { StatusCaseService } from '../StatusCase.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-create-status-case',
  templateUrl: './create-status-case.component.html',
  styleUrls: ['./create-status-case.component.scss'],
  providers: [StatusCaseService]
})
export class CreateStatusCaseComponent implements OnInit {

    CM00700: any = {};
    StatusTypeList: any[] = [];
    CaseStatusTypeList: any[] = [];
    constructor(
        private service: StatusCaseService,
        private alerts: ToastrService,
        public setting: PublicSetting,
    ) { }

    ngOnInit() {
        this.service.getAllStatusTypes().subscribe((res) => this.StatusTypeList = res);
        this.service.getAllCaseStatusType().subscribe((res) => this.CaseStatusTypeList = res);
  }
  save() {

      this.service.Add(this.CM00700).subscribe((res) => {
          if (res.Status)
              this.alerts.success(res.Massage);
          else
              this.alerts.error(res.Massage);
      }, (err) => {
          this.alerts.error('Error please try again later .');
      });
  }
}
