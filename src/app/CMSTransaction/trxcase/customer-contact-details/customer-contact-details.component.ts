import { Component, OnInit, Input, OnChanges, ViewEncapsulation} from '@angular/core';
import { CMSShared } from '../../../providers/CMS/CMSShared';
import { CustomerContactDetailsService } from './customer-contact-details.service'
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-customer-contact-details',
  templateUrl: './customer-contact-details.component.html',
  styleUrls: ['./customer-contact-details.component.scss'],
  providers: [CustomerContactDetailsService],
  //encapsulation: ViewEncapsulation.Native
})
export class CustomerContactDetailsComponent implements OnInit, OnChanges {
  @Input() CM00203: any;
  @Input() CurrentAddressType: any = {};
  updateContent: boolean;

  
  CM00104: any = {};
  constructor(public CMSShared: CMSShared, public customerDetailsService: CustomerContactDetailsService
  ,private alerts: ToastrService) { }

  ngOnInit() {
    this.CurrentAddressType = {};
  
    if (this.CM00203.AddressCode != null)
      this.CurrentAddressType = this.CMSShared.AddressList.filter((s) => s.AddressCode == this.CM00203.AddressCode)[0];
  }

  ngOnChanges() { }
  AddressList_Change() {
    this.CM00104 = {};
    this.customerDetailsService.GetDebtorAddressSingle(this.CM00203.CIFNumber, this.CM00203.CIFTRXTypeID, this.CurrentAddressType.AddressCode).subscribe((res) => {
      if (res != null) {
        this.CM00104 = res;
        this.updateContent = true;
      } else {
        this.updateContent = false;
      }
    }, (err) => { })
  }

  SaveDebtorAddress() {
    console.log(this.CM00104);
    this.CM00104.AddressCode = this.CurrentAddressType.AddressCode;
    this.CM00104.DebtorID = this.CM00203.CIFNumber;
    this.CM00104.TRXTypeID = this.CM00203.CIFTRXTypeID;  
    //this.CM00104.AddressCode = this.CM00203.AddressCode;
    if (this.updateContent) {
      this.customerDetailsService.UpdateDebtorAddress(this.CM00104)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(res.Description);
        }, (err) => {
          console.log(err);
        })
    } else {
      this.customerDetailsService.SaveDebtorAddress(this.CM00104)
        .subscribe((res) => {
          if (res.Status)
            this.alerts.success(res.Massage);
          else
            this.alerts.error(res.Description);
        }, (err) => {
          console.log(err);
        })
    }
  
  }


}
