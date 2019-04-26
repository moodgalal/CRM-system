import { Component, OnInit } from '@angular/core';
import { debtorClassService } from '../debtorClassService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-creatdebtorclass',
  templateUrl: './creatdebtorclass.component.html',
  styleUrls: ['./creatdebtorclass.component.scss'],
  providers: [debtorClassService]
})
export class CreatdebtorclassComponent implements OnInit {
  CM00010: any = {};
  constructor(
    private service: debtorClassService,
    private alerts: ToastrService,
    public setting: PublicSetting
  ) { }

  ngOnInit() { }

  saveDebtorClass() {
    this.service.SaveData(this.CM00010).subscribe((res) => {
      if (res.Status)
        this.alerts.success(res.Massage);
      else
        this.alerts.error(res.Massage);
    }, (err) => {
      this.alerts.error('Error please try again later .');
    });
  }
}
