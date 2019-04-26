import { Component, OnInit } from '@angular/core';
import { debtorGroupService } from '../debtorGroup.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updatedebtgroup',
  templateUrl: './updatedebtgroup.component.html',
  styleUrls: ['./updatedebtgroup.component.scss'],
  providers: [debtorGroupService]
})
export class UpdatedebtgroupComponent implements OnInit {
  GroupID: number;
  GroupName: string;
  debtorGroup: any = {};
  constructor(
    private service: debtorGroupService,
    private alerts: ToastrService,
    private setting: PublicSetting,
    private ActiveRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      this.debtorGroup.GroupID = this.ActiveRoute.snapshot.params['id'];
    this.service.GetSingle(this.GroupID).subscribe( (res) => {
        this.debtorGroup = res;
    }, (err) => {
      console.log(err);
    } );
  }
  UpdateDebtorGroup() {

      this.service.UpdateData(this.debtorGroup).subscribe((res) => {
          if (res.Status)
              this.alerts.success(res.Massage);
          else
              this.alerts.error(res.Massage);

    }, (err) => {
      this.alerts.error('error please try again later ');
    });
  }
  goBack() {
    window.history.back();
  }
}
