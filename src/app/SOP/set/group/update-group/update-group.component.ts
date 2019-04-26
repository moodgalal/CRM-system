import { Component, OnInit } from '@angular/core';
import { SOP00011Service } from '../group.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import {ActivatedRoute} from '@angular/router' 
@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.scss'],
  providers: [SOP00011Service]
})
export class UpdateGroupComponent implements OnInit {

    SOP00011: any = {};
    constructor(
        private service: SOP00011Service,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.SOP00011.GroupID = this.activatedRoute.snapshot.params['id'];
        this.service.GetSingle(this.SOP00011.GroupID).subscribe(
            (res) => {
                this.SOP00011 = res;
            }, (err) => { console.log(err);});
    }
    onSave() {
        this.service.UpdateData(this.SOP00011).subscribe(
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
