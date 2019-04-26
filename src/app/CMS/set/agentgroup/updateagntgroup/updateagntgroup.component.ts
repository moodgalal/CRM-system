import { Component, OnInit } from '@angular/core';
import { AgentGroupService } from '../agentGroupService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updateagntgroup',
  templateUrl: './updateagntgroup.component.html',
  styleUrls: ['./updateagntgroup.component.scss'],
  providers: [AgentGroupService]
})
export class UpdateagntgroupComponent implements OnInit {
    agentGroup: any = {};
  constructor(
    private service: AgentGroupService,
    private alerts: ToastrService,
    private setting: PublicSetting,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
   let id = this.activeRoute.snapshot.params['id'];
    console.log(id);


    this.service.GetSingle(id).subscribe((res) => {

this.agentGroup = res;
    }, (err) => {
    console.log(err);
    });
  }
  updateAgentGroup() {

      this.service.UpdateData(this.agentGroup)
    .subscribe((res) => {
        if (res.Status)
            this.alerts.success(res.Massage);
        else
            this.alerts.error(res.Massage);
    }, (err) => {
      this.alerts.error(`Try again later please`);
    });
  }
  deleteAgent() {
      console.log('delete ....');
      let id = this.activeRoute.snapshot.params['id'];
      this.service.DeleteData(id).subscribe((res) => {
          if (res.Status)
              this.alerts.success(res.Massage);
          else
              this.alerts.error(res.Massage);
      }, (err) => {
          this.alerts.error(`Try again later please`);
          });
  }
}
