import { Component, OnInit } from '@angular/core';


import { StatusTaskService } from '../StatusTask.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import {PirorityService } from '../../priority/priority.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [StatusTaskService, PirorityService]
})
export class CreateComponent implements OnInit {

    CM00025: any = {};
    PriorityList: any[] = [];
    CaseStatusList: any[] = [];
    constructor(
        private service: StatusTaskService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private priorityService: PirorityService,
    ) { }

    ngOnInit() {
        this.priorityService.getAll().subscribe((res) => { console.log(res); this.PriorityList = res; });
        this.service.getCaseStatus().subscribe((res) => { console.log(res); this.CaseStatusList = res; });
    }
    save() {

        this.service.Add(this.CM00025).subscribe((res) => {
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

}
