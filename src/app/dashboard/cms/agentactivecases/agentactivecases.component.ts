import { Component, OnInit } from '@angular/core';
import { AgentactivecasesService } from "./AgentactivecasesService";
@Component({
  selector: 'app-agentactivecases',
  templateUrl: './agentactivecases.component.html',
  styleUrls: ['./agentactivecases.component.scss'],
  providers: [AgentactivecasesService]
})
export class AgentactivecasesComponent implements OnInit {
  CMV00001List: Array<any> = [];
  public opened: boolean = false;
  public pieData: any = [
    { category: 'Eaten', value: 0.42 },
    { category: 'Not eaten', value: 0.58 }
  ];
  public charts: Array<any>  = [
    "Default",
    "Bar",
    "Pie"
  ];
  public selectedChart: any = this.charts[0];

  constructor(private service: AgentactivecasesService) { }

  ngOnInit() {
    this.service.GetMyTeamCases().subscribe((data) => {
      this.CMV00001List = data;
      this.CMV00001List.map(status => {
        status.ClaimAmount = parseFloat(status.ClaimAmount).toFixed(3);
        status.TotalCallactedAMT = parseFloat(status.TotalCallactedAMT).toFixed(3);
      });

    }, (err) => { });
  }


  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

}
