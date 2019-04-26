import { Component, OnInit } from '@angular/core';
import { Lookuo01Service } from '../lookup01.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-creatlookup01',
  templateUrl: './creatlookup01.component.html',
  styleUrls: ['./creatlookup01.component.scss'],
  providers: [Lookuo01Service]
})
export class Creatlookup01Component implements OnInit {

  lookup01: any = {};
  constructor(
    private service: Lookuo01Service,
    private alerts: ToastrService,
    public setting: PublicSetting
  ) { }
  ngOnInit() {
  }
  saveLookuo01() {

    this.service.SaveData(this.lookup01).subscribe((res) => {
        if (res.Status)
            this.alerts.success(res.Massage);
        else
            this.alerts.error(res.Massage);
    }, (err) => {
      this.alerts.error('Error please try again later .');
    });
  }

}
