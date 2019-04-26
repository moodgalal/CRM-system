import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { Asginmentservice } from './asginment.service';
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-asginment',
    templateUrl: './asginment.component.html',
    styleUrls: ['./asginment.component.scss'],
    providers: [Asginmentservice]
})
export class AsginmentComponent implements OnInit {
    CM00205: any = {};
    @Input() CaseMain: any;
    @Output('Asginment_Change') hideMe = new EventEmitter();

    constructor(private SRV: Asginmentservice, private alerts: ToastrService) {

    }
    ngOnInit() {
        this.CM00205.CaseRef = this.CaseMain.CaseRef;
        this.CM00205.TRXTypeID = this.CaseMain.TRXTypeID;
        this.CM00205.AgentID = this.CaseMain.AgentID;
        this.CM00205.AssignHistoryDate = new Date();
        this.CM00205.MinDateTime = new Date();
    }
    AgentTo_Change(event) {
        this.CM00205.ToAgentID = event;
    }
    Form_Closing() {
        this.hideMe.emit(true);
    }
    save() {
        this.SRV.AddAsginment(this.CM00205).subscribe((res) => {
            if (res.Status) {
              this.alerts.success(res.Massage);
              this.CaseMain.AgentID = this.CM00205.ToAgentID;
              this.CaseMain.AssignDate = this.CM00205.AssignHistoryDate;
                this.Form_Closing();
            } else {
                this.alerts.error(res.Description);
            }
        }, () => {
            this.alerts.error("Try Again Later Please")
        })
    }
}
