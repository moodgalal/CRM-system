import { Component, OnInit } from '@angular/core';
import { Lookuo01Service } from '../lookup01.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updatelookup01',
  templateUrl: './updatelookup01.component.html',
  styleUrls: ['./updatelookup01.component.scss'],
  providers: [Lookuo01Service]
})
export class Updatelookup01Component implements OnInit {



  lookup01: any = {};
  constructor(
    private service: Lookuo01Service,
    private alerts: ToastrService,
    public setting: PublicSetting,
    private ActiveRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      this.lookup01.lookup01Id = this.ActiveRoute.snapshot.params['id'];
      console.log(this.lookup01.lookup01Id);
      this.service.GetSingle(this.lookup01.lookup01Id).subscribe((res) => {
          this.lookup01 = res;
          console.log(res);
    }, (err) => {
console.log(err);
    });
  }
  Updatelookup01() {


      this.service.UpdateData(this.lookup01).subscribe((res) => {
          if (res.Status)
              this.alerts.success(res.Massage);
          else
              this.alerts.error(res.Massage);
    }, (err) => {
      this.alerts.error('error please try again later ');
    });
  }
  goBack() {
    window.history.back();
  }

}
