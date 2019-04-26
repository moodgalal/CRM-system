import { Component, OnInit } from '@angular/core';
import { DebtorAddreddService } from '../debtorAddressService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-creatdetraddress',
  templateUrl: './creatdetraddress.component.html',
  styleUrls: ['./creatdetraddress.component.scss'],
  providers: [DebtorAddreddService]
})
export class CreatdetraddressComponent implements OnInit {
    dropdownSource: any;
    debtorAddress: any = {};

  constructor(
    private service: DebtorAddreddService,
    private alerts: ToastrService,
    private setting: PublicSetting
  ) { }

  ngOnInit() {
     this.service.getAll().subscribe((res) => {
       this.dropdownSource = res;
       console.log(res);
     }
    , (err) => {

    });
  }
  public valueChange(value: any): void {
      this.debtorAddress.AddressTypeCode = value.AddressCode;
  }

  saveDebtorAddress() {

      this.service.SaveData(this.debtorAddress)
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
