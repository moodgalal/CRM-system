import { Component, OnInit } from '@angular/core';

import { CountrykService } from '../Country.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared'
@Component({
  selector: 'app-create-county',
  templateUrl: './create-county.component.html',
  styleUrls: ['./create-county.component.scss'],
  providers: [CountrykService]
})
export class CreateCountyComponent implements OnInit {
    sys00013: any = {};
    constructor(
        private service: CountrykService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        
    ) { }


  ngOnInit() {
  }
  save() {
      this.service.Add(this.sys00013).subscribe((res) => {
          if (res.Status)
              this.alerts.success(res.Massage);
          else
              this.alerts.error(res.Massage);
      }, (err) => {
          this.alerts.error('Error please try again later .');
      });
  }
}
