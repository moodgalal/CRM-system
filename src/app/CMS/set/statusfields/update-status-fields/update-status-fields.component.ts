import { Component, OnInit } from '@angular/core';
import { StatusFieldsService } from '../StatusFields.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-status-fields',
  templateUrl: './update-status-fields.component.html',
  styleUrls: ['./update-status-fields.component.scss'],
  providers: [StatusFieldsService]
})
export class UpdateStatusFieldsComponent implements OnInit {
    CM00060: any = {};
    FieldTypeList: any[] = [];
    CaseStatusList: any[] = [];
    constructor(
        private service: StatusFieldsService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe((res:any) => {
            this.CM00060.FieldCode = res.FieldCode;
            this.CM00060.CaseStatusID = res.id;
        });
        this.service.GetSingle(this.CM00060.CaseStatusID, this.CM00060.FieldCode).subscribe((res) => this.CM00060 = res);
        this.service.getAllFieldType().subscribe((res) => this.FieldTypeList = res);
        this.service.getCaseStatus().subscribe((res) => this.CaseStatusList = res);
    }

    save() {

        this.service.Update(this.CM00060).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }
    delete() {

        this.service.Delete(this.CM00060).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }

}
