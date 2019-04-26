import { Component, OnInit } from '@angular/core';
import { StatusFieldsService } from '../StatusFields.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-create-status-fields',
  templateUrl: './create-status-fields.component.html',
  styleUrls: ['./create-status-fields.component.scss'],
  providers: [StatusFieldsService]
})
export class CreateStatusFieldsComponent implements OnInit {
    CM00060: any = {};
    FieldTypeList: any[] = [];
    CaseStatusList: any[] = [];
    constructor(
        private service: StatusFieldsService,
        private alerts: ToastrService,
        public setting: PublicSetting,
    ) { }

    ngOnInit() {
        this.service.getAllFieldType().subscribe((res) => this.FieldTypeList = res);
        this.service.getCaseStatus().subscribe((res) => this.CaseStatusList = res);
  }
  save() {

      this.service.Add(this.CM00060).subscribe((res) => {
          if (res.Status)
              this.alerts.success(res.Massage);
          else
              this.alerts.error(res.Massage);
      }, (err) => {
          this.alerts.error('Error please try again later .');
      });
  }
}
