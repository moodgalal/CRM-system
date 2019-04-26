import { Component, OnInit } from '@angular/core';
import { debtorClassService } from '../debtorClassService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updatedebtorclass',
  templateUrl: './updatedebtorclass.component.html',
  styleUrls: ['./updatedebtorclass.component.scss'],
  providers: [debtorClassService]
})
export class UpdatedebtorclassComponent implements OnInit {
  CM00010: any = {};
  constructor(
    private service: debtorClassService,
    private alerts: ToastrService,
    public setting: PublicSetting,
    private ActiveRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      this.CM00010.CUSTCLAS = this.ActiveRoute.snapshot.params['id'];
   
      this.service.GetSingle(this.CM00010.CUSTCLAS).subscribe((res) => {
        this.CM00010 = res;
    }, (err) => {
      console.log(err);
    });
  }
  UpdateDebtorClass() {

    console.log(this.CM00010);
    this.service.UpdateData(this.CM00010).subscribe((res) => {
        if (res.Status) 
            this.alerts.success(res.Massage);
        else
            this.alerts.error(res.Massage);

    } , (err) => {
      this.alerts.error('error please try again later ');
    });
  }
  goBack() {
    window.history.back();
  }
}
