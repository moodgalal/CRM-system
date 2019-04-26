import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ReligionService } from '../Religion.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared'
@Component({
  selector: 'app-update-religion',
  templateUrl: './update-religion.component.html',
  styleUrls: ['./update-religion.component.scss'],
  providers: [ReligionService]
})
export class UpdateReligionComponent implements OnInit {

    Sys00008: any = {};
    constructor(
        private service: ReligionService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.Sys00008.ReligionID = this.route.snapshot.params['id'];
        this.service.GetSingle(this.Sys00008.ReligionID).subscribe((res) => this.Sys00008 = res);
    }
    save() {
        this.service.Update(this.Sys00008).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }
    delete() {
        this.service.Delete(this.Sys00008).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }

}
