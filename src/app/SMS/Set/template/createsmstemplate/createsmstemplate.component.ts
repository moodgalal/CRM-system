import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-createsmstemplate',
  templateUrl: './createsmstemplate.component.html',
  styleUrls: ['./createsmstemplate.component.scss'],
  providers: [TemplateService]
})
export class CreatesmstemplateComponent implements OnInit {

    template: any = {};
    constructor(
        private service: TemplateService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }

    ngOnInit() {
    }
    onSave() {
        this.service.SaveData(this.template).subscribe(
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
