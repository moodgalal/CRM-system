import { Component, OnInit } from '@angular/core';
import { ReceiverService } from '../receivers.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editreciever',
  templateUrl: './editreciever.component.html',
  styleUrls: ['./editreciever.component.scss'],
  providers: [ReceiverService]
})
export class EditrecieverComponent implements OnInit {

    receiver: any = {};
    constructor(
        private service: ReceiverService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.receiver.PhoneNumber = this.activeRoute.snapshot.params['id'];
        this.service.GetSingle(this.receiver.PhoneNumber).subscribe(
            (res) => {
                this.receiver = res;
            }, (err) => {
                console.log(err);
            });
    }
    onSave() {
        this.service.UpdateData(this.receiver).subscribe(
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
