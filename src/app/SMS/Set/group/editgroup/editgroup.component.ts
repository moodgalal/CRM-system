import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.scss'],
  providers: [GroupService]
})
export class EditgroupComponent implements OnInit {

    group: any = {};
    constructor(
        private service: GroupService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.group.GroupID = this.activeRoute.snapshot.params['id'];
        this.service.GetSingle(this.group.GroupID).subscribe(
            (res) => {
                this.group = res;
            }, (err) => {
                console.log(err);
            });
    }
    onSave() {
        this.service.UpdateData(this.group).subscribe(
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
