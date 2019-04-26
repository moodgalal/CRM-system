import { Component, OnInit } from '@angular/core';
import { PirorityService } from '../priority.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-priority',
  templateUrl: './update-priority.component.html',
  styleUrls: ['./update-priority.component.scss'],
  providers: [PirorityService]
})
export class UpdatePriorityComponent implements OnInit {
  PriorityID: number ;
  PriorityName: string;
  PriorityColor: string;
  Priority: any = {};
  constructor(
    private service: PirorityService,
    private alerts: ToastrService,
    private setting: PublicSetting,
    private ActiveRoute: ActivatedRoute
  ) { }
  ngOnInit() {
      this.Priority.PriorityID = this.ActiveRoute.snapshot.params['id'];

      this.service.GetSingle(this.Priority.PriorityID).subscribe((res) => {
          this.Priority = res;
    }, (error) => {
      console.log(error);
    });
  }
  UpdatePriority() {

      this.service.UpdateData(this.Priority).subscribe((res) => {
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
