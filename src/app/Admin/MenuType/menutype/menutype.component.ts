import { Component, OnInit } from '@angular/core';
import { MenuTypeService } from '../MenuTypeService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
    selector: 'app-menutype',
    templateUrl: './menutype.component.html',
    styleUrls: ['./menutype.component.scss'],
    providers: [MenuTypeService]
})
export class MenutypeComponent implements OnInit {
    Kaizen001: any = {};
    List: any[] = [];
    update: boolean = false;
    constructor(
        private service: MenuTypeService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { 
       
    }

    ngOnInit() {
        this.service.FillDropDownList().subscribe(
            (res) => { this.List = res; },
        (err)=> console.log(err));
    }
    onSave() {
        if (this.update) {
            this.service.UpdateData(this.Kaizen001).subscribe(
                (res) => {
                    if (res.Status) {
                        this.alerts.success(res.Massage);
                        this.Kaizen001 = {};
                    } else {
                        this.alerts.error(res.Massage);
                    }
                }, (err) => {
                    this.alerts.error(`Error Please try again later `);
                });
        } else {
            this.service.SaveData(this.Kaizen001).subscribe(
                (res) => {
                    if (res.Status) {
                        this.alerts.success(res.Massage);
                        this.List.push(this.Kaizen001);
                        this.Kaizen001 = {};
                    } else {
                        this.alerts.error(res.Massage);
                    }
                }, (err) => {
                    this.alerts.error(`Error Please try again later `);
                });
        }
    }
    Edit(item) {
        this.Kaizen001 = item;
        this.update = true;
    }
    Delete(item) {
        let index = this.List.indexOf(item);
        this.service.DeleteData(item.MenueTypeID).subscribe(
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
