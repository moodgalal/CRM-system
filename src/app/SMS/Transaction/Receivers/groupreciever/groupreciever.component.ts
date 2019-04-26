import { Component, OnInit } from '@angular/core';
import { ReceiverService } from '../receivers.service';
import { ToastrService } from 'ngx-toastr';

import { PublicSetting } from '../../../../models/PublicShared';
@Component({
  selector: 'app-groupreciever',
  templateUrl: './groupreciever.component.html',
  styleUrls: ['./groupreciever.component.scss'],
  providers: [ReceiverService]
})
export class GrouprecieverComponent implements OnInit {
    groupsData: Array<any> = [];
    receviersData: Array<any> = [];
    receiverGroup: any = {};
    constructor(
      public setting: PublicSetting,
        private receiverService: ReceiverService,
        private toaster: ToastrService
    ) { }

    ngOnInit() {
        this.receiverService.getAllGroups().subscribe(
            (res) => {
                this.groupsData = res;
            }, (err) => {
                console.log(err);
            });
        this.receiverService.getAll().subscribe(
            (res) => {
                this.receviersData = res;
            }, (err) => {
                console.log(err);
            });


  }
    onSave() {
        this.receiverService.AddToGroup(this.receiverGroup).subscribe(
            (res) => {
                if (res.Status) {
                    this.toaster.success(res.Massage);
                } else {
                    this.toaster.error(res.Massage);

                }
            },
            (err) => {
                this.toaster.error("error please try again later ");
            }
        );

    }
    PhoneNumber_valueChange(PhoneNumber) {
        this.receiverService.GetRecevierGroups(PhoneNumber).subscribe(
            (res) => {
                this.groupsData.forEach(group => {
                    group.checked = false;
                    res.forEach(receiverGroup => {
                        if (receiverGroup.GroupID == group.GroupID)
                            group.checked = true;
                    });
                })
            },
            (err) => {
                console.log(err);
            });
    }
    addOrDelete(col) {
        //col.RoleID = this.RoleID;
        //col.CompanyID = this.CompanyID;
        this.receiverGroup.GroupID = col.GroupID;
        if (col.checked) {
            this.receiverService.AddToGroup(this.receiverGroup)
                .subscribe((res) => {
                    if (res.Status)
                        this.toaster.success(res.Massage);
                    else
                        this.toaster.error(`${res.Massage}`);
                });
        }
        else {
            this.receiverService.RemoveFromGroup(this.receiverGroup)
                .subscribe((res) => {
                    if (res.Status)
                        this.toaster.success(res.Massage);
                    else
                        this.toaster.error(`${res.Massage}`);
                });
        }
    }
}
