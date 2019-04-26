import { Component, OnInit } from '@angular/core';
import { StatusCaseService } from '../StatusCase.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import{ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-update-status-case',
  templateUrl: './update-status-case.component.html',
  styleUrls: ['./update-status-case.component.scss'],
  providers: [StatusCaseService]
})
export class UpdateStatusCaseComponent implements OnInit {


    CM00700: any = {};
    StatusTypeList: any[] = [];

    constructor(
        private service: StatusCaseService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.CM00700.CaseStatusID = this.route.snapshot.params['id'];
        this.service.GetSingle(this.CM00700.CaseStatusID).subscribe((res) => this.CM00700 = res);
        this.service.getAllStatusTypes().subscribe((res) => this.StatusTypeList = res);
    }
    save() {

        this.service.Update(this.CM00700).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }
    delete() {

        this.service.Delete(this.CM00700).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }

}
