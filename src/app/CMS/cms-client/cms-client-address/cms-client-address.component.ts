import { Component, OnInit } from '@angular/core';
import { ClientService } from "../ClientService";
import { ToastrService } from "ngx-toastr";
import { PublicSetting } from "../../../models/PublicShared";
@Component({
  selector: 'app-cms-client-address',
  templateUrl: './cms-client-address.component.html',
  styleUrls: ['./cms-client-address.component.scss'],
  providers: [ClientService]
})
export class CmsClientAddressComponent implements OnInit {
    CM000111: any = {};
    ClientAddressList: any[] = [];
    AddressTypeList: any[] = [];
    constructor(public Setting: PublicSetting,
        private service: ClientService,
        private alerts: ToastrService,
    ) { }

    ngOnInit() {
        this.service.GetAddressTypeList().subscribe((res) => this.AddressTypeList = res)
  }
  save() {
      this.service.AddClientAddress(this.CM000111).subscribe((res) => {
          if (res.Status) {
              this.alerts.success(res.Massage);
              this.ClientAddressList.push(this.CM000111);
          } else {
              this.alerts.error(res.Massage);
          }
      },
          (err) => {
              this.alerts.error('Error Please try again later ')
          });
  }
  delete(item) {
      let index = this.ClientAddressList.indexOf(item);
      this.service.DeleteClientAddress(item).subscribe(
          (res) => {
              if (res.Status) {
                  this.alerts.success(res.Massage);
                  this.ClientAddressList.splice(1,index);
              } else {
                  this.alerts.error(res.Massage);
              }
          },
          (err) => {
              this.alerts.error('Error Please try again later ')
          });
  }
  AddressCodeType_Changed(addressTypeCode) {

  }
  getClient(client) {
      console.log(client);
      this.CM000111.ClientID = client.ClientID;
      this.service.GetClientAddress(client.ClientID).subscribe((res) => this.ClientAddressList = res);
  }

}
