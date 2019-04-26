import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { RoleService } from '../RoleService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.scss'],
  providers: [RoleService]
})
export class EditroleComponent implements OnInit {
  Kaizen00030: any = {};
    constructor(
        private service: RoleService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private activeRoute: ActivatedRoute
    ) { }
    ngOnInit() {
      this.Kaizen00030.RoleId = this.activeRoute.snapshot.params['id'];
      this.service.GetSingle(this.Kaizen00030.RoleId).subscribe(
            (res) => {
              this.Kaizen00030 = res;
                console.log(res);
            }, (err) => {
                console.log(err);
            });
    }
    onEdit() {
      this.service.UpdateData(this.Kaizen00030)
            .subscribe((res) => {
              if (res.Status)
                this.alerts.success(res.Massage);
              else
                this.alerts.error(res.Massage)
            }, (err) => {
                this.alerts.error(`Try again later please`);
            });
    }

    DeleteData() {
      this.service.DeleteData(this.Kaizen00030.RoleID)
        .subscribe((res) => {
          if (res.Status) {
            this.alerts.success(res.Massage)
            this.setting.GoBack();
          }
          else
            this.alerts.error(res.Description);
        }, () => {
          this.alerts.error("Try Again Later Please")
        })
    }

}
