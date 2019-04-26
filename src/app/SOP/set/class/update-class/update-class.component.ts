import { Component, OnInit } from '@angular/core';
import { SOP00010Service } from '../Class.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.scss'],
  providers: [SOP00010Service]
})
export class UpdateClassComponent implements OnInit {

    SOP00010: any = {};
    constructor(
        private service: SOP00010Service,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.SOP00010.CUSTCLAS = this.activeRoute.snapshot.params['id'];
        this.service.GetSingle(this.SOP00010.CUSTCLAS).subscribe(
            (res) => {
                this.SOP00010 = res;
            }, (err) => {
                console.log(err);
            }); 
    }
    onSave() {
        this.service.UpdateData(this.SOP00010).subscribe(
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
