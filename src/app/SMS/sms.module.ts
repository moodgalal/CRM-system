import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Start SMS/SET
      // Create account
      import { CreatesmsaccountComponent } from './Set/account/createsmsaccount/createsmsaccount.component';
      import { EditsmsaccountComponent } from './Set/account/editsmsaccount/editsmsaccount.component';
      import { MainsmsaccountComponent } from './Set/account/mainsmsaccount/mainsmsaccount.component';
      // account user
      import { AccountUserComponent } from './Set/account-user/account-user.component';
      // Group
      import { CreatgroupComponent } from './Set/group/creatgroup/creatgroup.component';
      import { EditgroupComponent } from './Set/group/editgroup/editgroup.component';
      import { MaingroupComponent } from './Set/group/maingroup/maingroup.component';
      // Template
      import { CreatesmstemplateComponent } from './Set/template/createsmstemplate/createsmstemplate.component';
      import { EditsmstemplateComponent } from './Set/template/editsmstemplate/editsmstemplate.component';
      import { MainsmstemplateComponent } from './Set/template/mainsmstemplate/mainsmstemplate.component';
// End SMS/SET

// Start SMS/Transaction
      //Reciever
      import { CreaterecieverComponent } from './Transaction/Receivers/createreciever/createreciever.component';
      import { EditrecieverComponent } from './Transaction/Receivers/editreciever/editreciever.component';
      import { GrouprecieverComponent } from './Transaction/Receivers/groupreciever/groupreciever.component';
      import { MainrecieverComponent } from './Transaction/Receivers/mainreciever/mainreciever.component';
      //Sender
      import { CreatesmsComponent } from './Transaction/sending/createsms/createsms.component';
      import { MainsmsComponent } from './Transaction/sending/mainsms/mainsms.component';
      import { ViewsmsComponent } from './Transaction/sending/viewsms/viewsms.component';
// End SMS/Transaction


//Module
import { DropDownsModule , AutoCompleteModule, ComboBoxModule, MultiSelectModule } from '@progress/kendo-angular-dropdowns';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabStripModule } from '@progress/kendo-angular-layout/dist/es/main';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { SortableModule } from '@progress/kendo-angular-sortable/dist/es/sortable.module';
import { StockChartModule, ChartsModule } from '@progress/kendo-angular-charts';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { UploadModule } from '@progress/kendo-angular-upload';
import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';
import { DialogsModule, WindowModule } from '@progress/kendo-angular-dialog';
import { RoutingModule } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    DropDownsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    TabStripModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ButtonsModule,
    GridModule,
    DateInputsModule,
    MultiSelectModule,
    InputsModule,
    DropDownsModule, AutoCompleteModule, ComboBoxModule,
    SortableModule,
    JsonpModule,
    StockChartModule,
    NgHttpLoaderModule,
    UploadModule,
    TelerikReportingModule,
    DialogsModule,
    WindowModule,
    ChartsModule
  ],
  declarations: [
    CreatesmsaccountComponent,
    EditsmsaccountComponent,
    MainsmsaccountComponent,
    AccountUserComponent,
    CreatgroupComponent,
    EditgroupComponent,
    MaingroupComponent,
    CreatesmstemplateComponent,
    EditsmstemplateComponent,
    MainsmstemplateComponent,
    CreaterecieverComponent,
    EditrecieverComponent,
    GrouprecieverComponent,
    MainrecieverComponent,
    CreatesmsComponent,
    MainsmsComponent,
    ViewsmsComponent
  ],
  schemas : [NO_ERRORS_SCHEMA]
})
export class SmsModule { }
