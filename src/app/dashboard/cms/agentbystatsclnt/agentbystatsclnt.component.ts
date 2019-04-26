import { Component, OnInit } from '@angular/core';
import { AgentbystatsclntService } from "./AgentbystatsclntService";
@Component({
  selector: 'app-agentbystatsclnt',
  templateUrl: './agentbystatsclnt.component.html',
  styleUrls: ['./agentbystatsclnt.component.scss'],
  providers: [AgentbystatsclntService]
})
export class AgentbystatsclntComponent implements OnInit {
  CMV00003List: Array<any> = [];
  constructor(private service: AgentbystatsclntService) { }

  ngOnInit() {
    this.service.GetMyTeamByClientStatus().subscribe((data) => {
      this.CMV00003List = data;
      this.CMV00003List.map(status => {
        status.ClaimAmount = parseFloat(status.ClaimAmount).toFixed(3);
        status.TotalCallactedAMT = parseFloat(status.TotalCallactedAMT).toFixed(3);
      });

    }, (err) => { });
  }

}
