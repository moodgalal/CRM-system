import { Component, OnInit } from '@angular/core';
import { AgentRoleService } from './agentRoleSerivce';
import { ToastrService } from "ngx-toastr";
import { PublicSetting } from "../../../models/PublicShared";
@Component({
  selector: 'app-agent-role',
  templateUrl: './agent-role.component.html',
  styleUrls: ['./agent-role.component.scss'],
  providers: [AgentRoleService]
})
export class AgentRoleComponent implements OnInit {
    rolesDataSource: any[] = [];
    agentRoleList: any[] = [];
    agentRole: any = {};
    constructor(public Setting: PublicSetting, private service: AgentRoleService, private alerts: ToastrService) { }

    ngOnInit() {
        this.service.GetALlRoles().subscribe((res) => this.rolesDataSource = res);
  }
    Save() {
        this.service.Add(this.agentRole).subscribe((res) => {
            if (res.Status) {
                this.agentRoleList.push(this.agentRole);
                this.alerts.success(res.Massage)
            } else {
                this.alerts.error(res.Massage)

            }

        }, (err) => {
            this.alerts.error(`Error please tey agin later `);
        });
    }
    delete(item) {
        let index = this.agentRoleList.indexOf(item);
        this.service.delete(item).subscribe((res) => {
            if (res.Status) {

                this.agentRoleList.splice(index);
                this.alerts.success(res.Massage);
            } else {
                this.alerts.error(res.Massage);

            }
        }, (err) => this.alerts.error('Error please try again later '));
    }
    RoleID_Changed(obj) {
        this.service.GetRoleAgents(obj).subscribe((res) => this.agentRoleList = res);
    }
    GetAgent(obj) {
        this.agentRole.AgentID = obj;
    }
}
