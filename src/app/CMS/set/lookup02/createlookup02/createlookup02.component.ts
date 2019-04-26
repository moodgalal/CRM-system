import { Component, OnInit } from '@angular/core';

import { Lookup02Service } from '../lookup02.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-createlookup02',
  templateUrl: './createlookup02.component.html',
  styleUrls: ['./createlookup02.component.scss'],
  providers: [Lookup02Service]
})
export class Createlookup02Component implements OnInit {

    lookup02: any = {};
  constructor(
    private service: Lookup02Service,
    private alerts: ToastrService,
    public setting: PublicSetting
  ) { }

  ngOnInit() {
  }
  saveLookuo01() {

      this.service.SaveData(this.lookup02).subscribe((res) => {
          if (res.Status)
              this.alerts.success(res.Massage);
          else
              this.alerts.error(res.Massage);
    }, (err) => {
      this.alerts.error('Error please try again later .');
    });
  }
  goBack() {
    window.history.back();
  }
}
