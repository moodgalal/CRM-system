import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
import { GridData } from "../../../models/data-model";
import { paymentapproveService } from "./paymentapprove.service";
@Component({
    selector: 'app-paymentapprove',
    templateUrl: './paymentapprove.component.html',
    styleUrls: ['./paymentapprove.component.scss'],
    providers: [paymentapproveService]
})
export class PaymentapproveComponent implements OnInit {
    viewsList: Array<any> = [];
    SelectedTRXType: any;
    selectedView: any;
    DataSource: GridData = null;
    datatable: Array<any> = null;
    constructor(public Setting: PublicSetting, private service: paymentapproveService, private alerts: ToastrService) { }

    ngOnInit() {
    }
    getViews() {
        this.viewsList = [];
        this.service.GetMyViewsByTRXTypeID(this.SelectedTRXType.TRXTypeID).subscribe((res) => {
            this.viewsList = res;
        })
    }
    getGridData() {
        this.service.GetUnApproveToApprove(this.selectedView.ViewID).subscribe((res) => {
            this.DataSource = res;
            this.datatable = this.DataSource.Items;
            this.datatable.map(status => {
                status.IsSelected = false;
            });
            //console.log(this.DataSource.Items);
        })
    }
    checkall: boolean = true;
    checkValue() {
        this.datatable.map(status => {
            if (this.checkall)
                status.IsSelected = true;
            else
                status.IsSelected = false;
        });
        this.checkall = !this.checkall;
        console.log(this.checkall)
    }
    save() {
        var CM10207List = [];
        this.datatable.map(status => {
            if (status.IsSelected)
            {
                var temp = { PaymentID: status.PaymentID };
                CM10207List.push(temp);
            }
        });
        this.service.ApproveDataObject(CM10207List).subscribe((res) => {
            if (res.Status) {
                this.alerts.success(res.Massage);
                this.getGridData();
            } else {
                this.alerts.error(res.Description);
            }
        }, () => {
            this.alerts.error("Try Again Later Please")
        })
    }
}
