import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cm00039Component } from './cm00039/cm00039.component';
import { ConfigroleComponent } from './configrole/configrole.component';

// start Configuration
    import { ViewFieldsConfComponent } from './configurations/view-fields/view-fields.component';
    import { ViewReorderConfComponent } from './configurations/view-reorder-conf/view-reorder-conf.component';
    import { ViewsortConfComponent } from './configurations/viewsort/viewsort.component';
// End Configuration

import { ConguserComponent } from './conguser/conguser.component';
import { EquasionFieldsComponent } from './equasion-fields/equasion-fields.component';
import { MainbuilderComponent } from './mainbuilder/mainbuilder.component';
import { NewbuilderComponent } from './newbuilder/newbuilder.component';
import { RoleAccessComponent } from './role-access/role-access.component';
import { UpdatebuilderComponent } from './updatebuilder/updatebuilder.component';
import { ViewMaintenanceComponent } from './view-maintenance/view-maintenance.component';
import { ViewReorderComponent } from './view-reorder/view-reorder.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewconditionComponent } from './viewcondition/viewcondition.component';
import { ViewsfieldsComponent } from './viewsfields/viewsfields.component';
import { ViewsortComponent } from './viewsort/viewsort.component';

// Module
import { DropDownsModule , AutoCompleteModule, ComboBoxModule, MultiSelectModule } from '@progress/kendo-angular-dropdowns';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from '../../app.routing';
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
     Cm00039Component,
    ConfigroleComponent,
    ViewFieldsConfComponent,
    ViewReorderConfComponent,
    ViewsortConfComponent,
    ConguserComponent,
    EquasionFieldsComponent,
    MainbuilderComponent,
    NewbuilderComponent,
    RoleAccessComponent,
    UpdatebuilderComponent,
    ViewMaintenanceComponent,
    ViewReorderComponent,
    ViewUserComponent,
    ViewconditionComponent,
    ViewsfieldsComponent,
    ViewsortComponent
  ],
  schemas : [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class BuildersModule { }
