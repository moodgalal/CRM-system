import { Component, OnInit } from '@angular/core';
import { DebtorAddreddService } from '../debtorAddressService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatdetraddress',
  templateUrl: './updatdetraddress.component.html',
  styleUrls: ['./updatdetraddress.component.scss'],
  providers: [DebtorAddreddService]
})
export class UpdatdetraddressComponent implements OnInit {

    Debtoraddress: any = {};

  dropdownSource: any;

  constructor(
    private service: DebtorAddreddService,
    private alerts: ToastrService,
    private setting: PublicSetting,
    private activeRoute: ActivatedRoute
  ) { }
  ngOnInit() {
      console.log(this.activeRoute.snapshot.params['id']);
      this.Debtoraddress.UserName = this.activeRoute.snapshot.params['id'];
 
    this.service.getAll().subscribe((res) => {
      this.dropdownSource = res;
    }, (err) => {
      console.log(err);
    });
  }
  updateDebtorAddress() {

      this.service.UpdateData(this.Debtoraddress)
      .subscribe((res) => {
          if (res.Status)
              this.alerts.success(res.Massage);
          else
              this.alerts.error(res.Massage);
      }, (err) => {
        this.alerts.error(`Try again later please`);
      });
  }
  valueChange(object) {
      this.Debtoraddress.AddressTypeCode = object.AddressCode;
  }
  goBack() {
    window.history.back();
  }

}
