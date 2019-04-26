import { Component, OnInit } from '@angular/core';
import { debtorStatusService } from '../debtorStatusService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-creatdebtor-status',
  templateUrl: './creatdebtor-status.component.html',
  styleUrls: ['./creatdebtor-status.component.scss'],
  providers: [debtorStatusService]
})
export class CreatdebtorStatusComponent implements OnInit {
    DebtorStatus: any = {};
  constructor(
    private service: debtorStatusService,
    private alerts: ToastrService,
    private setting: PublicSetting
  ) { }

  ngOnInit() {
  }
saveDeboterStatus() {


    this.service.SaveData(this.DebtorStatus)
    .subscribe((res) => {
        if (res.Status)
            this.alerts.success(res.Massage);
        else
            this.alerts.error(res.Massage);
    }, (err) => {
      this.alerts.error(`Try again later please`);
    });
}

  updateColumn() {
    console.log('update ....');
  }

  goBack() {
    window.history.back();
  }

}
