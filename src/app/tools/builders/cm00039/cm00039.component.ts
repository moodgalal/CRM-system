import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
import { CM00039Service } from './cm00039.service';
@Component({
  selector: 'app-cm00039',
  templateUrl: './cm00039.component.html',
  styleUrls: ['./cm00039.component.scss'],
  providers: [CM00039Service]
})
export class Cm00039Component implements OnInit {
    CM00029List: any[] = [];
    CM00039List: any[] = [];
    CM00039: any = {};
    SelectedTRXType: any = {};
    constructor(public Setting: PublicSetting, private service: CM00039Service, private alerts: ToastrService) { }


    ngOnInit() {
        this.service.GetAllTRXType().subscribe((res) => this.CM00029List = res);
  }
  CM00029List_Change(obj) {
      console.log(obj.TRXTypeID);
      this.service.GetCM00039ByTrxType(obj.TRXTypeID).subscribe((res) => this.CM00039List = res);
  }
  Delete(item) {
      let index = this.CM00039List.indexOf(item);
      this.service.Delete(item).subscribe((res) => {
          if (res.Status) {
              this.alerts.success(res.Massage);
              this.CM00039List.splice(index, 1);
          } else {
              this.alerts.error(res.Massage);
          }
      }, (err) => this.alerts.error(`Error please try again later`));
  }
  Edit(item) {
      this.CM00039 = item;
  }
  onSave() {
      this.service.updateCM00039List(this.CM00039).subscribe((res) => {
          if (res.Status) {
              this.alerts.success(res.Massage);
          } else {
              this.alerts.error(res.Massage);
          }
      }, (err) => this.alerts.error(`Error please try again later`));

  }
}
