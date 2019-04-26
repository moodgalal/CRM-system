import { Component, OnInit } from '@angular/core';
import { Lookup02Service } from '../lookup02.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updatelookup02',
  templateUrl: './updatelookup02.component.html',
  styleUrls: ['./updatelookup02.component.scss'],
  providers: [Lookup02Service]
})
export class Updatelookup02Component implements OnInit {
 
    lookup02: any = {};

  constructor(
    private service: Lookup02Service,
    private alerts: ToastrService,
    public setting: PublicSetting,
    private ActiveRoute: ActivatedRoute
  ) { }
  ngOnInit() {
      this.lookup02.lookup02Id = this.ActiveRoute.snapshot.params['id'];
      this.service.GetSingle(this.lookup02.lookup02Id).subscribe((res) => {
          this.lookup02 = res;
    }, (err) => {
      console.log(err);
    });
  }
  Updatelookup02() {
  
      this.service.UpdateData(this.lookup02).subscribe((res) => {
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
