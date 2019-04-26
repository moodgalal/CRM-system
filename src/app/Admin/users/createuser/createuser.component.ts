import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {UserService} from "../UserService";
import {ToastrService} from "ngx-toastr";
import { PublicSetting } from "../../../models/PublicShared";
@Component({
    selector: 'app-createuser',
    templateUrl: './createuser.component.html',
    styleUrls: ['./createuser.component.scss'],
    encapsulation: ViewEncapsulation.None,    
    providers: [UserService]
})
export class CreateuserComponent implements OnInit {

    User: any = {};

    constructor(private service: UserService, public Setting: PublicSetting, private alerts: ToastrService) { }

    ngOnInit() {
    }
     
    create() {
        this.service.SaveData(this.User)
            .subscribe((res) => {
                if (res.Status)
                  this.alerts.success(res.Description)
                else
                    this.alerts.error(res.Description);
            }, () => {
                this.alerts.error("Try Again Later Please")
            })
    }
}
