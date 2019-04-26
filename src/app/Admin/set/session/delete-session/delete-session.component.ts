import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'
import { SessionService } from '../Session.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared'
@Component({
  selector: 'app-delete-session',
  templateUrl: './delete-session.component.html',
  styleUrls: ['./delete-session.component.scss'],
  providers: [SessionService]
})
export class DeleteSessionComponent implements OnInit {

    sys00000: any = {};
    constructor(
        private service: SessionService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe(
            (res:any) => {
                this.sys00000.UserName = res.userName;
                this.sys00000.SequenceName = res.SequenceName;
            });
        this.service.GetSingle(this.sys00000.UserName, this.sys00000.SequenceName ).subscribe((res) => this.sys00000 = res);
    }
 
    delete() {
        this.service.Delete(this.sys00000).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }

}
