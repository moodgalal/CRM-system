import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { UserService } from "../UserService";
import { PublicSetting } from "../../../models/PublicShared";
@Component({
  selector: 'app-useraccesssecurity',
  templateUrl: './useraccesssecurity.component.html',
  styleUrls: ['./useraccesssecurity.component.scss'],

  providers: [UserService]
})
export class UseraccesssecurityComponent implements OnInit {
    companyAccess: any = {};
    companyList: any[] = [];
    userCompanyAccess: any[] = [];
    constructor(public setting: PublicSetting, private service: UserService,
        private alerts: ToastrService,) { }


    ngOnInit() {
        this.service.GetALlCompanies().subscribe((res) => {
            this.companyList = res;
            console.log(res);
        });
    }
    onUserChange(user) {
        console.log(user);
        this.service.GetCompanys(user.UserName).subscribe((res) => this.userCompanyAccess = res);
        this.companyAccess.UserName = user.UserName;
    }
    save() {
        this.service.AddCompanyAccess(this.companyAccess).subscribe(
            (res) => {
                if (res.Status) {
                    this.alerts.success(res.Massage);
                    this.userCompanyAccess.push(this.companyAccess);
                } else {
                    this.alerts.error(res.Massage);

                }
            }, (err) => this.alerts.error('Error Please try again later '));
    }
    delete(item) {
        let index = this.userCompanyAccess.indexOf(item);
        this.service.DeleteCompanyAccess(item).subscribe(
            (res) => {
                if (res.Status) {
                    this.alerts.success(res.Massage);
                    this.userCompanyAccess.splice(1, index);
                } else {
                    this.alerts.error(res.Massage);

                }
            }, (err) => this.alerts.error('Error Please try again later '));
    }

}
