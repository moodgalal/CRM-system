import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { TrxCaseService } from '../trxCase.service';
import { PublicSetting } from "../../../models/PublicShared";
import { CMSShared } from '../../../providers/CMS/CMSShared';
import { KaizenService } from "../../../providers/kaizen/kaizen.service";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-createtrxcase',
  templateUrl: './createtrxcase.component.html',
  styleUrls: ['./createtrxcase.component.scss'],
  providers: [TrxCaseService]
})
export class CreatetrxcaseComponent implements OnInit {
  @ViewChild('doActiontRef') doActiontRef;
  @ViewChild('caseAttachmentRef') caseAttachmentRef;
  CM00203: any = {};
  CM00104: any = {};
  constructor(public Setting: PublicSetting,
    public CMSShared: CMSShared,
    private activeRoute: ActivatedRoute,
    private trxService: TrxCaseService,
    private keizenService: KaizenService,
    private sanitizer: DomSanitizer) {

  }
  ngOnInit() {
    this.CMSShared.GetMyAddressList();
  }



}
