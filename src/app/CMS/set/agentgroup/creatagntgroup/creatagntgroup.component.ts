import { Component, OnInit } from '@angular/core';
import { AgentGroupService } from '../agentGroupService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-creatagntgroup',
  templateUrl: './creatagntgroup.component.html',
  styleUrls: ['./creatagntgroup.component.scss'],
  providers: [AgentGroupService]
})
export class CreatagntgroupComponent implements OnInit {

    agentGroup: any = {};
  constructor(
    private service: AgentGroupService,
    private alerts: ToastrService,
    private setting: PublicSetting
  ) { }

  ngOnInit() {
  }

  saveAgentGroup() {
 

     this.service.SaveData(this.agentGroup)
       .subscribe((res) => {
           if (res.Status)
               this.alerts.success(res.Massage);
           else
               this.alerts.error(res.Massage);
       }, (err) => {
         this.alerts.error(`Try again later please`);
       });
  }

  goBack() {
    window.history.back();
  }
 

}
