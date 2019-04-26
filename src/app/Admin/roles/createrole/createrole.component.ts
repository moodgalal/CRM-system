import { Component, OnInit } from '@angular/core';
import { RoleService } from '../RoleService';
import { ToastrService } from 'ngx-toastr';
import { PublicSetting } from '../../../models/PublicShared';
@Component({
  selector: 'app-createrole',
  templateUrl: './createrole.component.html',
  styleUrls: ['./createrole.component.scss'],
  providers: [RoleService]
})
export class CreateroleComponent implements OnInit {
  Kaizen00030: any = {};
  constructor(
    private service: RoleService,
    private alerts: ToastrService,
    public setting: PublicSetting
  ) { }

  ngOnInit() {
  }
  SaveData() {
    this.service.SaveData(this.Kaizen00030)
      .subscribe((res) => {
        if (res.Status)
          this.alerts.success(res.Massage);
        else
          this.alerts.error(res.Massage)
      });
  }
}
