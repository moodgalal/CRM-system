import { Component, OnInit } from '@angular/core';
import { MenuTypeService } from '../MenuTypeService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
  selector: 'app-menumodules',
  templateUrl: './menumodules.component.html',
  styleUrls: ['./menumodules.component.scss'],
  providers: [MenuTypeService]
})
export class MenumodulesComponent implements OnInit {
    
    List: any[] = [];
    MenuTypeList: any[] = [];
    ModuleList: any[] = [];
    Kaizen002: any = {};
    constructor(
        private service: MenuTypeService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) {

    }

    ngOnInit() {
        this.service.FillDropDownList().subscribe(
            (res) => { this.MenuTypeList = res });
        this.service.GetAllMedules().subscribe(
            (res) => this.ModuleList = res);
  }
    queryParams_Changed() {
        this.service.GetMenuModules(this.Kaizen002.ModuleID, this.Kaizen002.MenueTypeID).subscribe(
            (res) => this.List = res);
    }
    Edit(item) {
        this.Kaizen002 = item;
    }
    onSave() {
        this.service.UpdateMenuModule(this.Kaizen002).subscribe(
            (res) => {
                if (res.Status) this.alerts.success(res.Massage)
                else this.alerts.error(res.Massage)
            }, (err) => this.alerts.error(`Error Please try again later `));
    }
}
