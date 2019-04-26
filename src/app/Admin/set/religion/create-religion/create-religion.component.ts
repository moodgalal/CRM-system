import { Component, OnInit } from '@angular/core';
import { ReligionService } from '../Religion.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared'
@Component({
  selector: 'app-create-religion',
  templateUrl: './create-religion.component.html',
  styleUrls: ['./create-religion.component.scss'],
  providers: [ReligionService]
})
export class CreateReligionComponent implements OnInit {

    Sys00008: any = {};
    constructor(
        private service: ReligionService,
        private alerts: ToastrService,
        public setting: PublicSetting,

    ) { }


    ngOnInit() {
    }
    save() {
        this.service.Add(this.Sys00008).subscribe((res) => {
            if (res.Status)
                this.alerts.success(res.Massage);
            else
                this.alerts.error(res.Massage);
        }, (err) => {
            this.alerts.error('Error please try again later .');
        });
    }


}
