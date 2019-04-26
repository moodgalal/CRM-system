import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { KaizenService } from '../../providers/kaizen/kaizen.service';
import { PublicShared } from '../../models/PublicShared';
import { ToastrService } from 'ngx-toastr';


declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  showCompantSelection: boolean = false;
  showError: boolean = false;
  constructor(private _service: KaizenService, private _router: Router, private alerts: ToastrService) {
    // $('#header, .breadcrumb-container, .customHide').hide();
    $('#aside, #header, #showSwitcher, .breadcrumb-container, .chat-container').hide();

  }
  showWarning() {
    this.alerts.info('Please Contact System Administator To Rest your Password', 'Info');
  }
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this._router.navigate(['/dashboard']);
    }
  }

  genrateHash() {
    if (this.username.nativeElement.value == '' || this.password.nativeElement.value == '') {
      this.showError = true;
      return;
    }
    let RawHashedString  = btoa(`${this.username.nativeElement.value}:${this.password.nativeElement.value}`);
    this._service.loginAuthStep1(RawHashedString).subscribe((res) => {
      console.log(res);
      const TOKEN  = res.headers.getAll('token')[0];
      PublicShared.TokenValue = TOKEN;
      this.showCompantSelection = true;
      console.log(TOKEN);
    }, (err) => {
      this.alerts.error('please enter valid credentials ');
    })
  }
  
  ngOnDestroy() {
    // $('#header, .breadcrumb-container, .customHide').show();
    $('#aside, #header, #showSwitcher, .breadcrumb-container, .chat-container').show();
    // $("#middle").css('marginLeft', '235px');
  }

}
