import { Component, OnInit } from '@angular/core';
import { ReceiverService  } from '../receivers.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-createreciever',
  templateUrl: './createreciever.component.html',
  styleUrls: ['./createreciever.component.scss'],
  providers: [ReceiverService]
})
export class CreaterecieverComponent implements OnInit {

    receiver: any = {};
    constructor(
        private service: ReceiverService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    ngOnInit() {
    }
    onSave() {
        this.service.SaveData(this.receiver).subscribe(
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
