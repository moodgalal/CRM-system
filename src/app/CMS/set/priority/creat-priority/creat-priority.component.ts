import { Component, OnInit } from '@angular/core';
import { PirorityService} from '../priority.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-creat-priority',
  templateUrl: './creat-priority.component.html',
  styleUrls: ['./creat-priority.component.scss'],
  providers: [PirorityService]
})
export class CreatPriorityComponent implements OnInit {

  Priority: any = {};
  constructor(
    private service: PirorityService,
    private alerts: ToastrService,
    private setting: PublicSetting
  ) { }


  ngOnInit() {
  }
  savePriority() {

      this.service.SaveData(this.Priority).subscribe((res) => {
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
