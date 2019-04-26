import { Component, OnInit } from '@angular/core';
import { debtorStatusService } from '../debtorStatusService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatedebtor-status',
  templateUrl: './updatedebtor-status.component.html',
  styleUrls: ['./updatedebtor-status.component.scss'],
  providers: [debtorStatusService]
})
export class UpdatedebtorStatusComponent implements OnInit {
    DebtorStatus: any = {};

  constructor(
    private service: debtorStatusService,
    private alerts: ToastrService,
    private setting: PublicSetting,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      this.DebtorStatus.DebtorStatusID = this.activeRoute.snapshot.params['id'];
      this.service.GetSingle(this.DebtorStatus.DebtorStatusID).subscribe((res) => {
          this.DebtorStatus = res;
          console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
  goBack() {
    window.history.back();
  }
  updateDebtorStatus() {
   
      this.service.UpdateData(this.DebtorStatus)
      .subscribe((res) => {
          if (res.Status)
              this.alerts.success(res.Massage);
          else
              this.alerts.error(res.Massage);
      }, (err) => {
        this.alerts.error(`Try again later please`);
      });
  }
}
