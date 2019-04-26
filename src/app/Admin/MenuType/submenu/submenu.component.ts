import { Component, OnInit } from '@angular/core';
import { MenuTypeService } from '../MenuTypeService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss'],
    providers: [MenuTypeService]
})
export class SubmenuComponent implements OnInit {
    Kaizen000: any = {};
    List: any[] = [];
    update: boolean = false;
    constructor(
        private service: MenuTypeService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) {

    }

    ngOnInit() {
        this.service.GetAllMedules().subscribe(
            (res) => { this.List = res; });

    }
    onSave() {
        if (this.update) {
            this.service.UpdateModule(this.Kaizen000).subscribe(
                (res) => {
                    if (res.Status) {
                        this.alerts.success(res.Massage);
                        this.Kaizen000 = {};
                    } else {
                        this.alerts.error(res.Massage);
                    }
                }, (err) => {
                    this.alerts.error(`Error Please try again later `);
                });
        } else {
            this.service.AddModule(this.Kaizen000).subscribe(
                (res) => {
                    if (res.Status) {
                        this.alerts.success(res.Massage);
                        this.List.push(this.Kaizen000);
                        this.Kaizen000 = {};
                    } else {
                        this.alerts.error(res.Massage);
                    }
                }, (err) => {
                    this.alerts.error(`Error Please try again later `);
                });
        }
    }
    Edit(item) {
        this.Kaizen000 = item;
        this.update = true;
    }
    Delete(item) {
        let index = this.List.indexOf(item);
        this.service.DeleteModule(item).subscribe(
            (res) => {
                if (res.Status) {
                    this.List.splice(index, 1);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.error(res.Massage);
                }
            }, (err) => {
                this.alerts.error(`Error Please try again later `);
            });
    }
}
