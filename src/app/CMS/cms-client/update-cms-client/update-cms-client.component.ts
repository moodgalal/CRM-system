import { Component, OnInit } from '@angular/core';
import { ClientService } from "../ClientService";
import { ToastrService } from "ngx-toastr";
import { PublicSetting } from "../../../models/PublicShared";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-cms-client',
  templateUrl: './update-cms-client.component.html',
  styleUrls: ['./update-cms-client.component.scss'],
  providers: [ClientService]
})
export class UpdateCmsClientComponent implements OnInit {
    CM00110: any = {};
    CUSTCLASList: any[] = [];
    StatusIDList: any[] = [];
    AddressCodeList: any[] = [];
    constructor(public setting: PublicSetting,
        private service: ClientService,
        private alerts: ToastrService,
        private route: ActivatedRoute

    ) { }

    ngOnInit() {
        this.CM00110.ClientID = this.route.snapshot.params['id'];
        this.service.GetCustClassList().subscribe((res) => this.CUSTCLASList = res);
        this.service.GetStatusList().subscribe((res) => this.StatusIDList = res);
        this.service.GetAddressTypeList().subscribe((res) => this.AddressCodeList = res);
        this.service.GetSingle(this.CM00110.ClientID).subscribe((res) => this.CM00110 = res);
    }

    getNationality(nationality) {
        console.log(nationality);
    }
    getParentClient(client) {
        console.log(client);
        this.CM00110.ParentClient = client.ClientID;
    }
    SaveData() {
        this.service.UpdateData(this.CM00110).subscribe(
            (res) => {
                if (res.Status) this.alerts.success(res.Massage);
                else this.alerts.error(res.Massage);
            },
            (err) => { this.alerts.error(`Error Please Try again later `); });
    }
}
