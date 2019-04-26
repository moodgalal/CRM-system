import { Component, OnInit } from '@angular/core';
import { debtorGroupService } from '../debtorGroup.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-creatdebtgroup',
  templateUrl: './creatdebtgroup.component.html',
  styleUrls: ['./creatdebtgroup.component.scss'],
  providers: [debtorGroupService]
})
export class CreatdebtgroupComponent implements OnInit {

    debtorGroup: any={};
  constructor(
    private service: debtorGroupService,
    private alerts: ToastrService,
    private setting: PublicSetting
  ) { }


  ngOnInit() {
  }
  saveDebtorGroup() {
  
  
    this.service.SaveData(this.debtorGroup).subscribe((res) => {
        if (res.Status)
            this.alerts.success(res.Massage);
        else
            this.alerts.error(res.Massage);

    }, (err) => {
      this.alerts.error('Error please try again later .');
    });
  }
  goBack() {
    window.history.back();
  }
}
