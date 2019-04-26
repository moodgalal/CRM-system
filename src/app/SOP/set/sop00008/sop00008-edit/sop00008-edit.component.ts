import { Component, OnInit } from '@angular/core';
import { SOP00008Service } from '../sop00008.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sop00008-edit',
  templateUrl: './sop00008-edit.component.html',
  styleUrls: ['./sop00008-edit.component.scss'],
  providers: [SOP00008Service]
})
export class Sop00008EditComponent implements OnInit {


    SOP00008: any = {};
    constructor(
        private service: SOP00008Service,
        private alerts: ToastrService,
        public setting: PublicSetting
        , private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.SOP00008.SalePersonTypeID = this.activeRoute.snapshot.params['id'];
        this.service.GetSingle(this.SOP00008.SalePersonTypeID).subscribe(
            (res) => {
                console.log(res);
                this.SOP00008 = res;
            }, (err) => {
                console.log(err);
            });
    }
    onSave() {
        this.service.UpdateData(this.SOP00008).subscribe(
            (res) => {
                if (res.Status)
                    this.alerts.success(res.Massage);
                else
                    this.alerts.error(res.Massage);
            }, (err) => {
                this.alerts.error('Error please try again later .');
            });
    }


}
