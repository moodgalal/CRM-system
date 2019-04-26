import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../../models/PublicShared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editsmstemplate',
  templateUrl: './editsmstemplate.component.html',
  styleUrls: ['./editsmstemplate.component.scss'],
  providers: [TemplateService]
})
export class EditsmstemplateComponent implements OnInit {

    template: any = {};
    constructor(
        private service: TemplateService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.template.TemplateID = this.activeRoute.snapshot.params['id'];
        this.service.GetSingle(this.template.TemplateID).subscribe(
            (res) => {
                this.template = res;
            }, (err) => {
                console.log(err);
            });
    }
    onSave() {
        this.service.UpdateData(this.template).subscribe(
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
