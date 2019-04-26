import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { KaizenService } from '../../providers/kaizen/kaizen.service';
import { PublicShared } from '../../models/PublicShared'
import 'rxjs/operator/finally';
@Component({
    selector: 'app-login-company',
    templateUrl: './loginCompany.component.html',
    styleUrls: ['./loginCompany.component.scss']
})
export class LoginCompanyComponent implements OnInit {
    comapnyData;
    selectedCompany;
    userData;
    constructor(private _service: KaizenService, private _router: Router) { }

    ngOnInit() {
        this._service.loginAuthStep2().subscribe(res => {
            console.log(res);
            console.log(res.length);
            if (res.length == 1) {
              this.comapnyData = res;
              this.selectedCompany = this.comapnyData[0];
              this.selectComapny();
              return;
            }
            this.comapnyData = res;
            this.selectedCompany = this.comapnyData[0];
        });
        this._service.GetCurrentUser().subscribe(res => {
            console.log(res);
            this.userData = res;
        })
    }


    selectComapny() {
        this._service.loginAuthStep3(this.selectedCompany.CompanyID.trim()).subscribe(res => {
            if (res) {
                console.log(res);
                //alert(this.selectedCompany.CompanyID.trim());
                localStorage.setItem('CompanyProfile', JSON.stringify({ CompanyName: this.selectedCompany.CompanyName.trim(), CompanyID: this.selectedCompany.CompanyID.trim() }));
                res['chatStatus'] = false;
                localStorage.setItem('userProfile', JSON.stringify(res));
                localStorage.setItem('token', PublicShared.TokenValue);
                this.redirectToDashbaord();
                AppComponent.updateNavbar.next(true);
            }
        });

    }
    redirectToDashbaord() {
        this._router.navigateByUrl('/dashboard');
    }
}
