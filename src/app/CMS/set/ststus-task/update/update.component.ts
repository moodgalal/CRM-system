import { Component, OnInit } from '@angular/core';

import { StatusTaskService } from '../StatusTask.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { PirorityService } from '../../priority/priority.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [StatusTaskService, PirorityService]
})
export class UpdateComponent implements OnInit {
    CM00025: any = {};
    PriorityList: any[] = [];
    CaseStatusList: any[] = [];
    constructor(
        private service: StatusTaskService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private priorityService: PirorityService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.CM00025.TaskID = this.route.snapshot.params['id'];
        console.log(this.CM00025);
        this.service.GetSingle(this.CM00025.TaskID).subscribe((res) => this.CM00025 = res);
        console.log(this.CM00025);
        this.priorityService.getAll().subscribe((res) => { this.PriorityList = res; });
        this.service.getCaseStatus().subscribe((res) => { this.CaseStatusList = res; });
    }
    save() {

        this.service.Update(this.CM00025).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }

    getAgent(agent) {
        this.CM00025.AgentID = agent;
    }
    delete() {
        let TaskID = this.route.snapshot.params['id'];
        this.service.Delete(TaskID).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });

    }
}
