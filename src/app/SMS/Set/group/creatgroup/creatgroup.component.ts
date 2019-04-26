import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-creatgroup',
  templateUrl: './creatgroup.component.html',
  styleUrls: ['./creatgroup.component.scss'],
  providers: [GroupService]
})
export class CreatgroupComponent implements OnInit {

    group: any = {};
    constructor(
        private service: GroupService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    ngOnInit() {
    }
    onSave() {
        this.service.SaveData(this.group).subscribe(
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
