import { Component, OnInit } from '@angular/core';
import { AgentbyclientService } from "./agentbyclientService";
@Component({
  selector: 'app-agentbyclient',
  templateUrl: './agentbyclient.component.html',
  styleUrls: ['./agentbyclient.component.scss'],
  providers: [AgentbyclientService]
})
export class AgentbyclientComponent implements OnInit {
  CMV00004List: Array<any> = [];
  constructor(private service: AgentbyclientService) { }

  ngOnInit() {
    this.service.GetMyTeamByClient().subscribe((data) => {
      this.CMV00004List = data;
      this.CMV00004List.map(status => {
        status.ClaimAmount = parseFloat(status.ClaimAmount).toFixed(3);
        status.TotalCallactedAMT = parseFloat(status.TotalCallactedAMT).toFixed(3);
      });

    }, (err) => { });
  }

}
