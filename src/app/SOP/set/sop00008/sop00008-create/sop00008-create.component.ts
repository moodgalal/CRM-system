import { Component, OnInit } from '@angular/core';
import { SOP00008Service } from '../sop00008.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-sop00008-create',
  templateUrl: './sop00008-create.component.html',
  styleUrls: ['./sop00008-create.component.scss'],
  providers: [SOP00008Service]
})
export class Sop00008CreateComponent implements OnInit {

    SOP00008: any = {};
    constructor(
        private service: SOP00008Service,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

  ngOnInit() {
  }
  onSave() {
      this.service.SaveData(this.SOP00008).subscribe(
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
