import { Component, OnInit } from '@angular/core';
import { ClientService } from "../ClientService";
import { ToastrService } from "ngx-toastr";
import { PublicSetting } from "../../../models/PublicShared";
import { debtorClassService } from '../../set/debtorclass/debtorClassService';
import { debtorStatusService } from '../../set/debtor-status/debtorStatusService';

 @Component({
  selector: 'app-create-cms-client',
  templateUrl: './create-cms-client.component.html',
  styleUrls: ['./create-cms-client.component.scss'],
  providers: [ClientService, debtorClassService,
      debtorStatusService]
})
export class CreateCmsClientComponent implements OnInit {
     CM00110: any = {};
     CUSTCLASList: any[] = [];
     StatusIDList: any[] = [];
     AddressCodeList: any[] = [];
    constructor(public setting: PublicSetting,
        private service: ClientService,
        private alerts: ToastrService,
        private custClassService: debtorClassService,
        private statusService: debtorStatusService
    ) { }

    ngOnInit() {
        this.service.GetCustClassList().subscribe((res) => this.CUSTCLASList = res);
        this.service.GetStatusList().subscribe((res) => this.StatusIDList = res);
        this.service.GetAddressTypeList().subscribe((res) => this.AddressCodeList = res);
  }
  getNationality(nationality) {
      console.log(nationality);
  }
  getParentClient(client) {
      console.log(client);
      this.CM00110.ParentClient = client.ClientID;
  }
  SaveData() {
      this.service.SaveData(this.CM00110).subscribe(
          (res) => {
              if (res.Status) this.alerts.success(res.Massage);
              else this.alerts.error(res.Massage);
          },
          (err) => { this.alerts.error(`Error Please Try again later `); });
  }

}
