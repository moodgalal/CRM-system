import { Component, OnInit } from '@angular/core';
import { AgentUserService } from './AgentUser.service';
import { ToastrService } from "ngx-toastr";
import { PublicSetting } from "../../../models/PublicShared";
@Component({
  selector: 'app-agent-user',
  templateUrl: './agent-user.component.html',
  styleUrls: ['./agent-user.component.scss'],
  providers: [AgentUserService]
})
export class AgentUserComponent implements OnInit {

    agentUserList: any[] = [];
    agentUser: any = {};
    constructor(public Setting: PublicSetting, private service: AgentUserService, private alerts: ToastrService) { }

    ngOnInit() {
    }
    Save() {
        this.service.Add(this.agentUser).subscribe((res) => {
            if (res.Status) {
                this.agentUserList.push(this.agentUser);
                this.alerts.success(res.Massage)
            } else {
                this.alerts.error(res.Massage)

            }

        }, (err) => {
            this.alerts.error(`Error please tey agin later `);
        });
    }
    delete(item) {
        let index = this.agentUserList.indexOf(item);
        this.service.delete(item).subscribe((res) => {
            if (res.Status) {

                this.agentUserList.splice(index);
                this.alerts.success(res.Massage);
            } else {
                this.alerts.error(res.Massage);

            }
        }, (err) => this.alerts.error('Error please try again later '));
    }
    GetAgent(agentID) {
        this.agentUser.AgentID = agentID;
    }
    getUser(user) {
        console.log(user);
        this.service.GetUserAgents(user.UserName).subscribe((res) => this.agentUserList = res);
        this.agentUser.UserName = user.UserName;
    }
}
