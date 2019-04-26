import { Component, OnInit } from '@angular/core';
import { DebtorService } from "../DebtorService";
import { ToastrService } from "ngx-toastr";
import { PublicSetting } from "../../../models/PublicShared";
import { debtorClassService } from '../../set/debtorclass/debtorClassService';
import { PirorityService } from '../../set/priority/priority.service';
import { debtorStatusService } from '../../set/debtor-status/debtorStatusService';
import { debtorGroupService } from '../../set/debtorgroup/debtorGroup.service';
interface ItemInt {
    text: string,
    value: number
}
@Component({
    selector: 'app-creatdebtor',
    templateUrl: './creatdebtor.component.html',
    styleUrls: ['./creatdebtor.component.scss'],
    providers: [DebtorService, debtorClassService, PirorityService, debtorStatusService, debtorGroupService]
})
export class CreatdebtorComponent implements OnInit {
    showDoAction: boolean = false;
    showCaseAttachment: boolean = false;
    value = null;
    testData = ['x', 'y', 'z'];
    debtor: any = {};
    custClassData: any[] = [];
    debtorClassdata: any[] = [];
    prioritydata: any[] = [];
    debtorstatusData: any[] = [];
    detorGroupData: any[] = [];
    trxTypeData: any[] = [];
   
    newDebtor: any = {};
    public Sys00011: Array<ItemInt> = [
        { text: "Male", value: 1 },
        { text: "Female", value: 2 },
        { text: "N/A", value: 3 }
    ];
    constructor(private service: DebtorService,
        private alerts: ToastrService,
        public setting: PublicSetting,
        private _debtorClassService: debtorClassService,
        private _PirorityService: PirorityService,
        private _debtorStatusService: debtorStatusService,
        private _debtorGroupService: debtorGroupService
    ) { }

    ngOnInit() {
        this._debtorClassService.GetAll().subscribe(
            (res) => {
                this.custClassData = res;
                console.log(this.custClassData);
            }, (err) => {
                console.log(err)
            });
        this._PirorityService.getAll().subscribe(
            (res) => {
                this.prioritydata = res;
                console.log(this.prioritydata);

            }, (err) => {
                console.log(err)

            }
        );
        this._debtorStatusService.GetAll().subscribe(
            (res) => {
                this.debtorstatusData = res;
                console.log(this.debtorstatusData);
            }, (err) => console.log(err));
        this._debtorGroupService.GetAll().subscribe(
            (res) => {
                this.detorGroupData = res;
                console.log(res);

            }, (err) => console.log(err));

    }

    save() {
        //let model: any = {};

        this.service.addDebtor(this.newDebtor)
            .subscribe((res) => {
                if (res.Status) {
                    this.alerts.success(res.Massage);
                } else 
                    this.alerts.error(res.Massage);

            }, (err) => {
                this.alerts.error(`Try again later please`);
            })
    }
    OnAgentGroupchange(w) {
        //let model: any = {};

        //this.service.addDebtor(model)
        //    .subscribe((res) => {
        //        this.alerts.success(`Saved Successfully`);

        //    }, (err) => {
        //        this.alerts.error(`Try again later please`);
        //    })
    }
}
