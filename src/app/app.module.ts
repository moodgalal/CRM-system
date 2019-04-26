import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule, DropDownsModule, ComboBoxModule, AutoCompleteModule } from '@progress/kendo-angular-dropdowns';

import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RoutingModule } from './app.routing';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module'
// import { MdSidenavModule, MdToolbarModule, MdListModule, MdGridListModule, MdCardModule, MdDialogModule } from '@angular/material';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { KaizenService } from './providers/kaizen/kaizen.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { StockChartModule } from '@progress/kendo-angular-charts';
import { DialogsModule, WindowModule } from '@progress/kendo-angular-dialog';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';


import '@progress/kendo-ui';
import { GlobalGridComponent } from './Global/global-grid/global-grid.component';
import { GridActionsComponent } from './grid-actions/grid-actions.component';
import { LoginComponent } from './Admin/login/login.component';
import { LoginCompanyComponent } from './Admin/LoginCompany/loginCompany.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ContactComponent } from './contact/contact.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import { MdIconModule } from '@angular/material';
import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';
import { PublicSetting } from './models/PublicShared';
import { CMSShared } from './providers/CMS/CMSShared';
import { CMSService } from './providers/CMS/Transations.service';
// LOOKUPS ---------------------------------------------------------------
import { CaselookupComponent } from './LookUps/caselookup/caselookup.component';
import { CheckBookComponent} from './LookUps/check-book/check-book.component';
import { UsersLookupComponent} from './LookUps/users-lookup/users-lookup.component';
import { CurrencyLookupComponent } from './LookUps/currency-lookup/currency-lookup.component';
import { ClientLookupComponent } from './LookUps/client-lookup/client-lookup.component';
import { CMSContractLookupComponent } from './LookUps/cmscontract-lookup/cmscontract-lookup.component';
import { AgentLookupComponent } from './LookUps/agent-lookup/agent-lookup.component';
import { CustomerLookupComponent } from './LookUps/Customers-PopUp/customer-lookup.component';
import { EmployeeLookupComponent } from './LookUps/Employee-lookup/employees-lookup.component';
import { NationalityLookupComponent } from './LookUps/nationality-lookup/nationality-lookup.component';
import { ItemsLookupComponent } from './LookUps/items-popup/items-lookup.component';
import { ItemsBySiteLookupComponent } from './LookUps/ItemsBySite-popup/ItemsBySite-lookup.component';
import { COWorkQueueComponent } from './CMS/co-work-queue/co-work-queue.component';

// CMSTransaction
import { PaymentReceiptComponent } from './CMSTransaction/payment-receipt/payment-receipt.component';
import { PaymentManualComponent } from './CMSTransaction/payment-manual/payment-manual.component';
import { CaseAttachementComponent } from './CMSTransaction/case-attachement/case-attachement.component';
import { DoactionComponent } from './CMSTransaction/doaction/doaction.component';
import { CMSTRXCaseUploadingComponent } from './CMSTransaction/cms-trx-case-uploading/cms-trx-case-uploading.component';
import { CaseEntryComponent } from './CMSTransaction/case-entry/case-entry.component';
import { CaseEditEntryComponent } from './CMSTransaction/case-edit-entry/case-edit-entry.component';
import { DebtoreditEnreyComponent } from './CMSTransaction/debtoredit-enrey/debtoredit-enrey.component';
import { BulkActionComponent } from './CMSTransaction/bulk-action/bulk-action.component';
import { DoActionsComponent } from './CMSTransaction/bulk-action/do-actions/do-actions.component';
import { BulkCaseModifyComponent } from './CMSTransaction/bulk-case-modify/bulk-case-modify.component';
import { BulkCaseassignmentComponent } from './CMSTransaction/bulk-caseassignment/bulk-caseassignment.component';
import { BulkDeleteComponent } from './CMSTransaction/bulk-delete/bulk-delete.component';
import { BulkcustomerComponent } from './CMSTransaction/bulkcustomer/bulkcustomer.component';
import { UploadCasesComponent } from './CMSTransaction/Bulk/upload-cases/upload-cases.component';
import { CaseArchiveComponent } from './CMS/Inquiry/case-archive/case-archive.component';
import { UploadModule} from '@progress/kendo-angular-upload';
import { TabStripModule } from '@progress/kendo-angular-layout';
import { ToggleFullscreenDirective } from './directives/fullscreen';

// Admin
import { MainusersComponent } from './Admin/users/mainusers/mainusers.component';
import { CreateuserComponent } from './Admin/users/createuser/createuser.component';
import { UseraccesssecurityComponent } from './Admin/users/useraccesssecurity/useraccesssecurity.component';
import { MainrolesComponent } from './Admin/roles/mainroles/mainroles.component';
import { UserProfileComponent } from './Admin/user-profile/user-profile.component';
// end Admin
import { MainitemComponent } from './IV/ItemCard/mainitem/mainitem.component';
import { CreateitemComponent } from './IV/ItemCard/createitem/createitem.component';
import { MaincustomerComponent } from './SOP/customer/maincustomer/maincustomer.component';
import { CreatecustomerComponent } from './SOP/customer/createcustomer/createcustomer.component';
import { MaindebtorsComponent } from './CMS/debtor/maindebtors/maindebtors.component';
import { CreatdebtorComponent } from './CMS/debtor/creatdebtor/creatdebtor.component';
import { MainquotationComponent } from './SOPTransaction/quotation/mainquotation/mainquotation.component';
import { CreatquotationComponent } from './SOPTransaction/quotation/creatquotation/creatquotation.component';
import { MainAdjustmentComponent } from './IVTransaction/adjustment/main-adjustment/main-adjustment.component';
import { CreatadjustmentComponent } from './IVTransaction/adjustment/creatadjustment/creatadjustment.component';
import { MaintransferComponent } from './IVTransaction/transfer/maintransfer/maintransfer.component';
import { CreatetransferComponent } from './IVTransaction/transfer/createtransfer/createtransfer.component';
import { MainbatchComponent } from './IVTransaction/batch/mainbatch/mainbatch.component';
import { CreatbatchComponent } from './IVTransaction/batch/creatbatch/creatbatch.component';
import { MaininquiryComponent } from './SOPTransaction/customerinquiry/maininquiry/maininquiry.component';
import { CreatinquiryComponent } from './SOPTransaction/customerinquiry/creatinquiry/creatinquiry.component';
import { MainglaccountComponent } from './GL/glaaccount/mainglaccount/mainglaccount.component';
import { CreateglaccountComponent } from './GL/glaaccount/createglaccount/createglaccount.component';
import { MaintransentryComponent } from './GLTransaction/gltrxentry/maintransentry/maintransentry.component';
import { CreatetransentryComponent } from './GLTransaction/gltrxentry/createtransentry/createtransentry.component';
import { MaincaseassignmentComponent } from './CMSTransaction/bulkAssignment/maincaseassignment/maincaseassignment.component';
import { CreatcaseaassignmentComponent } from './CMSTransaction/bulkAssignment/creatcaseaassignment/creatcaseaassignment.component';
import { DoactionAssignmentComponent } from './CMSTransaction/bulkAssignment/DoactionAssignment/DoactionAssignment.component';
import { MaintrxcaseComponent } from './CMSTransaction/trxcase/maintrxcase/maintrxcase.component';
import { CreatetrxcaseComponent } from './CMSTransaction/trxcase/createtrxcase/createtrxcase.component';
import { EdittrxcaseComponent } from './CMSTransaction/trxcase/edittrxcase/edittrxcase.component';
import { ViewtrxcaseComponent } from './CMSTransaction/trxcase/viewcase/viewtrxcase.component';
import { DoactioncaseComponent } from './CMSTransaction/trxcase/doactioncase/doactioncase.component';
import { SmsComponent } from './CMSTransaction/trxcase/sms/sms.component';
import { EmailComponent } from './CMSTransaction/trxcase/email/email.component';
import { MainEmployeeComponent } from './HR/HR_COMMON/Employee/main-employee/main-employee.component';
import { AddEmployeeComponent } from './HR/HR_COMMON/Employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './HR/HR_COMMON/Employee/edit-employee/edit-employee.component';
import { CasedeleteComponent } from './CMSTransaction/Bulk/casedelete/casedelete.component';
import { CaseUpdateComponent } from './CMSTransaction/Bulk/case-update/case-update.component';
import { UploadpaymentComponent } from './CMSTransaction/Bulk/uploadpayment/uploadpayment.component';
import { BulkactionsComponent } from './CMSTransaction/Bulk/bulkactions/bulkactions.component';
import { BulkcustomersComponent } from './CMSTransaction/Bulk/bulkcustomers/bulkcustomers.component';
import { PublicDynamicReportComponent } from './report/public-dynamic-report/public-dynamic-report.component';
import { AssignmentgenrateComponent } from './CMSTransaction/CaseAssignment/assignmentgenrate/assignmentgenrate.component';
import { MainAssignmentComponent } from './CMSTransaction/CaseAssignment/main-assignment/main-assignment.component';
import { BulkActionEntryComponent } from './CMSTransaction/bulk-action-entry/bulk-action-entry.component';
import { MainBulkComponent } from './CMSTransaction/main-bulk/main-bulk.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { AuthGuard } from './providers/auth/auth.guard';
import { ServiceInterceptor } from './providers/auth/service-interceptor';


import { BulkArchiveComponent } from './CMSTransaction/Bulk/archive/bulk-archive.component';
import { BulkSMSComponent } from './CMSTransaction/Bulk/SMS/bulk-SMS.component';
import { BulkEmailComponent } from './CMSTransaction/Bulk/Email/bulk-Email.component';

import { ToastrModule } from 'ngx-toastr';
import { CasePaymentComponent } from './CMSTransaction/trxcase/case-payment/case-payment.component';


// Chat
// import { ChatComponent } from './chat/chat.component';

import { DynamicreportComponent } from './Global/Reports/dynamicreport/dynamicreport.component';
import { AssignmentComponent } from './CMSTransaction/Bulk/assignment/assignment.component';
import { DoactionbulkComponent } from './CMSTransaction/Bulk/Actions/doactionbulk/doactionbulk.component';
import { DoactionuploadComponent } from './CMSTransaction/Bulk/Actions/doactionupload/doactionupload.component';

import { CaseAttachmentComponent } from './CMSTransaction/trxcase/case-attachment/case-attachment.component';

import {SystemRegistrationKeyComponent} from './Admin/license/system-registration-key/system-registration-key.component';
import { UpdateDebtorComponent } from './CMS/debtor/update-debtor/update-debtor.component';
import { MainAgentComponent } from './CMS/Agent/main-agent/main-agent.component';
import { UpdateAgentComponent } from './CMS/Agent/update-agent/update-agent.component';
import { CreateAgentComponent } from './CMS/Agent/create-agent/create-agent.component';
import { UpdateuserComponent } from './Admin/users/updateuser/updateuser.component';
import { ChangePasswordComponent } from './Admin/users/change-password/change-password.component';
import { MainLetterFormComponent } from './CMS/Letter/LetterForm/main-letter-form/main-letter-form.component';
import { UpdateLetterFormComponent } from './CMS/Letter/LetterForm/update-letter-form/update-letter-form.component';
import { CreateLetterFormComponent } from './CMS/Letter/LetterForm/create-letter-form/create-letter-form.component';
import { CreateLetterTypeComponent } from './CMS/Letter/LetterType/create-letter-type/create-letter-type.component';
import { MainLetterTypeComponent } from './CMS/Letter/LetterType/main-letter-type/main-letter-type.component';
import { UpdateLetterTypeComponent } from './CMS/Letter/LetterType/update-letter-type/update-letter-type.component';
import { MainCompanyComponent } from './Admin/Company/main-company/main-company.component';
import { UpdateCompanyComponent } from './Admin/Company/update-company/update-company.component';
import { CreateCompanyComponent } from './Admin/Company/create-company/create-company.component';
import { WhereConditionComponent } from './CMS/Agent/where-condition/where-condition.component';
import {PrintLetterComponent} from './CMSTransaction/trxcase/letter/printLetter/printLetter.component';
import { RemainderComponent } from './CMSTransaction/remainder/remainder.component';

// receipt
import {MainReceiptComponent} from './CMSTransaction/receipt/main-receipt/main-receipt.component';
import {CreateReceiptComponent} from './CMSTransaction/receipt/create-receipt/create-receipt.component';
import {UpdateReceiptComponent} from './CMSTransaction/receipt/update-receipt/update-receipt.component';
import { MainReplacementComponent } from './CMSTransaction/replacement/main-replacement/main-replacement.component';
import { CreateReplacementComponent } from './CMSTransaction/replacement/create-replacement/create-replacement.component';
import { GlobalFilterComponent } from './Global/global-filter/global-filter.component';
import { CycletraceComponent } from './CMSTransaction/trxcase/cycletrace/cycletrace.component';
import { PortfolioComponent } from './CMS/Inquiry/portfolio/portfolio.component';
import { OnlygridComponent } from './CMS/Inquiry/onlygrid/onlygrid.component';
import { OnlyReportComponent } from './CMS/Inquiry/only-report/only-report.component';
import { MainGridComponent } from './Global/main-grid/main-grid.component';
import { CmsPeriodComponent } from './CMS/controllers/cms-period/cms-period.component';
import { MainLetterComponent } from './CMSTransaction/Bulk/bulk-letter/main-letter/main-letter.component';
import { ViewLetterComponent } from './CMSTransaction/Bulk/bulk-letter/view-letter/view-letter.component';
import { UpdateLetterComponent } from './CMSTransaction/Bulk/bulk-letter/update-letter/update-letter.component';
import { AdvancebulkletterComponent } from './CMSTransaction/Bulk/letter/advancebulkletter/advancebulkletter.component';
import { Mainlookup02Component } from './CMS/set/lookup02/mainlookup02/mainlookup02.component';
import { Createlookup02Component } from './CMS/set/lookup02/createlookup02/createlookup02.component';
import { Updatelookup02Component } from './CMS/set/lookup02/updatelookup02/updatelookup02.component';
import { Mainlookup01Component } from './CMS/set/lookup01/mainlookup01/mainlookup01.component';
import { Creatlookup01Component } from './CMS/set/lookup01/creatlookup01/creatlookup01.component';
import { Updatelookup01Component } from './CMS/set/lookup01/updatelookup01/updatelookup01.component';
import { MainDebtorStatusComponent } from './CMS/set/debtor-status/main-debtor-status/main-debtor-status.component';
import { CreatdebtorStatusComponent } from './CMS/set/debtor-status/creatdebtor-status/creatdebtor-status.component';
import { UpdatedebtorStatusComponent } from './CMS/set/debtor-status/updatedebtor-status/updatedebtor-status.component';
import { MaindebtgroupComponent } from './CMS/set/debtorgroup/maindebtgroup/maindebtgroup.component';
import { CreatdebtgroupComponent } from './CMS/set/debtorgroup/creatdebtgroup/creatdebtgroup.component';
import { UpdatedebtgroupComponent } from './CMS/set/debtorgroup/updatedebtgroup/updatedebtgroup.component';
import { MainPriorityComponent } from './CMS/set/priority/main-priority/main-priority.component';
import { CreatPriorityComponent } from './CMS/set/priority/creat-priority/creat-priority.component';
import { UpdatePriorityComponent } from './CMS/set/priority/update-priority/update-priority.component';
import { MaindebtorclassComponent } from './CMS/set/debtorclass/maindebtorclass/maindebtorclass.component';
import { CreatdebtorclassComponent } from './CMS/set/debtorclass/creatdebtorclass/creatdebtorclass.component';
import { UpdatedebtorclassComponent } from './CMS/set/debtorclass/updatedebtorclass/updatedebtorclass.component';
import { MaindetraddressComponent } from './CMS/set/debtraddress/maindetraddress/maindetraddress.component';
import { CreatdetraddressComponent } from './CMS/set/debtraddress/creatdetraddress/creatdetraddress.component';
import { UpdatdetraddressComponent } from './CMS/set/debtraddress/updatdetraddress/updatdetraddress.component';
import { MainagntgroupComponent } from './CMS/set/agentgroup/mainagntgroup/mainagntgroup.component';
import { CreatagntgroupComponent } from './CMS/set/agentgroup/creatagntgroup/creatagntgroup.component';
import { UpdateagntgroupComponent } from './CMS/set/agentgroup/updateagntgroup/updateagntgroup.component';
import { PortfolioGradingComponent } from './CMS/khcb/portfolio-grading/portfolio-grading.component';
import { PortfolioGradingmonthComponent } from './CMS/khcb/portfolio-gradingmonth/portfolio-gradingmonth.component';
import { PortfolioGradingmonthViewComponent } from './CMS/khcb/portfolio-gradingmonth-view/portfolio-gradingmonth-view.component';
import { PortfolioGradingViewComponent } from './CMS/khcb/portfolio-grading-view/portfolio-grading-view.component';
import { PortfoliocycleComponent } from './CMS/khcb/portfoliocycle/portfoliocycle.component';
import {PortfoliomovmentComponent} from './CMS/khcb/portfoliomovment/portfoliomovment.component';
import { Khcb_collectionYTDComponent } from './CMS/khcb/khcb_collectionYTD/khcb_collectionYTD.component';

import {FeesComponent} from './CMSTransaction/trxcase/fees/fees.component';
import { TrxTypeComponent } from './Global/trx-type/trx-type.component';
import { TrxviewComponent } from './Global/trxview/trxview.component';
import { CustomerContactDetailsComponent } from './CMSTransaction/trxcase/customer-contact-details/customer-contact-details.component';
import { CreateroleComponent } from './Admin/roles/createrole/createrole.component';
import { EditroleComponent } from './Admin/roles/editrole/editrole.component';
import { LookupgridComponent } from './Global/lookupgrid/lookupgrid.component';


import { LookUpSetting } from './Global/lookupgrid/LoockUpSetting';
import { BanklookupComponent} from './LookUps/banklookup/banklookup.component';
import { AsginmentComponent } from './CMSTransaction/trxcase/asginment/asginment.component';
import { PaymentapproveComponent } from './CMSTransaction/receipt/paymentapprove/paymentapprove.component';
import { AuditComponent } from './Admin/users/audit/audit.component';
import { UserlogComponent } from './Admin/users/userlog/userlog.component';
import { MainWorkQueueComponent } from './CMS/AgentWorkQueue/main-work-queue/main-work-queue.component';
import { CreatworkQueueComponent } from './CMS/AgentWorkQueue/creatwork-queue/creatwork-queue.component';
import { UpdateworkqueueComponent } from './CMS/AgentWorkQueue/updateworkqueue/updateworkqueue.component';
import { ProvisionytdComponent } from './CMS/khcb/provisionytd/provisionytd.component';
import { SuspendincomeComponent } from './CMS/khcb/suspendincome/suspendincome.component';
import { RmsproductComponent } from './CMS/khcb/rmsproduct/rmsproduct.component';
import { RmscollectstageComponent } from './CMS/khcb/rmscollectstage/rmscollectstage.component';
import { RmsagentComponent } from './CMS/khcb/rmsagent/rmsagent.component';
import { UsercompanyComponent } from './Admin/accessuser/usercompany/usercompany.component';
import { RoleuserComponent } from './Admin/accessuser/roleuser/roleuser.component';
import { AccesmenuroleComponent } from './Admin/roles/accesmenurole/accesmenurole.component';
import { StafftargetreportComponent } from './CMS/khcb/stafftargetreport/stafftargetreport.component';

//  SOP Set
import { Sop00008MainComponent } from './SOP/set/sop00008/sop00008-main/sop00008-main.component';
import { Sop00008CreateComponent } from './SOP/set/sop00008/sop00008-create/sop00008-create.component';
import { Sop00008EditComponent } from './SOP/set/sop00008/sop00008-edit/sop00008-edit.component';
import { MainAddressTypeComponent } from './SOP/set/address-type/main-address-type/main-address-type.component';
import { CreateAddressTypeComponent } from './SOP/set/address-type/create-address-type/create-address-type.component';
import { UpdateAddressTypeComponent } from './SOP/set/address-type/update-address-type/update-address-type.component';
import { MainClassComponent } from './SOP/set/class/main-class/main-class.component';
import { CreateClassComponent } from './SOP/set/class/create-class/create-class.component';
import { UpdateClassComponent } from './SOP/set/class/update-class/update-class.component';
import { MainCustomerRefranceComponent } from './SOP/set/customer-refrance/main-customer-refrance/main-customer-refrance.component';
import { CreteCustomerRefranceComponent } from './SOP/set/customer-refrance/crete-customer-refrance/crete-customer-refrance.component';
import { UpdateCustomerRefranceComponent } from './SOP/set/customer-refrance/update-customer-refrance/update-customer-refrance.component';
import { MainGroupComponent } from './SOP/set/group/main-group/main-group.component';
import { CreateGroupComponent } from './SOP/set/group/create-group/create-group.component';
import { UpdateGroupComponent } from './SOP/set/group/update-group/update-group.component';
import { SOPMainPriorityComponent } from './SOP/set/priority/main-priority/main-priority.component';
import { SOPUpdatePriorityComponent } from './SOP/set/priority/update-priority/update-priority.component';

import { CreatePriorityComponent } from './SOP/set/priority/create-priority/create-priority.component';
import { MainStatusComponent } from './SOP/set/status/main-status/main-status.component';
import { CreateStatusComponent } from './SOP/set/status/create-status/create-status.component';
import { UpdateStatusComponent } from './SOP/set/status/update-status/update-status.component';
import {GlobalSortComponent} from "./Global/global-sort/global-sort.component";
import {GlobalFieldCreatorComponent} from "./Global/global-field-creator/global-field-creator.component";
import { GlobalOrderComponent } from './Global/global-order/global-order.component';
import { AgentcasesComponent } from './dashboard/cms/agentcases/agentcases.component';
import { RmsptpagentComponent } from './CMS/khcb/rmsptpagent/rmsptpagent.component';
import { RmsptpproductComponent } from './CMS/khcb/rmsptpproduct/rmsptpproduct.component';
import { RmsptpcollectstageComponent } from './CMS/khcb/rmsptpcollectstage/rmsptpcollectstage.component';
import { DashreminderComponent } from './dashboard/cms/dashreminder/dashreminder.component';
import { CollectiondashComponent } from './dashboard/cms/agent-box/collectiondash/collectiondash.component';
import { ActionsdashComponent } from './dashboard/cms/agent-box/actionsdash/actionsdash.component';
import { CasesdashComponent } from './dashboard/cms/agent-box/casesdash/casesdash.component';
import { AgentrankdashComponent } from './dashboard/cms/agent-box/agentrankdash/agentrankdash.component';
import { CallsdashComponent } from './dashboard/cms/agent-box/callsdash/callsdash.component';
import { CreatedashComponent } from './dashboard/Set/createdash/createdash.component';
import { ReportdashComponent } from './dashboard/Set/reportdash/reportdash.component';
import {DashboardService} from "./dashboard/DashboardService";
import { DashrolesComponent } from './dashboard/Set/dashroles/dashroles.component';
import { ReportrolesComponent } from './dashboard/Set/reportroles/reportroles.component';
import { ReportuserroleComponent } from './dashboard/Set/reportuserrole/reportuserrole.component';
import {DashboarduserroleComponent} from './dashboard/Set/dashboarduserrole/dashboarduserrole.component';
import { MenutypeComponent } from './Admin/MenuType/menutype/menutype.component';
import { SubmenuComponent } from './Admin/MenuType/submenu/submenu.component';
import { MenumodulesComponent } from './Admin/MenuType/menumodules/menumodules.component';
import { AgentactivecasesComponent } from './dashboard/cms/agentactivecases/agentactivecases.component';
import { AgentbystatusComponent } from './dashboard/cms/agentbystatus/agentbystatus.component';
import { AgentbyclientComponent } from './dashboard/cms/agentbyclient/agentbyclient.component';
import { AgentbystatsclntComponent } from './dashboard/cms/agentbystatsclnt/agentbystatsclnt.component';
import { TargetagentComponent } from './CMS/Agent/targetagent/targetagent.component';
import { MainComponent } from './CMS/set/ststus-task/main/main.component';
import { CreateComponent } from './CMS/set/ststus-task/create/create.component';
import { UpdateComponent } from './CMS/set/ststus-task/update/update.component';
import { MainStatusScriptComponent } from './CMS/set/status-script/main-status-script/main-status-script.component';
import { CreateStatusScriptComponent } from './CMS/set/status-script/create-status-script/create-status-script.component';
import { UpdateStatusScriptComponent } from './CMS/set/status-script/update-status-script/update-status-script.component';
import { MainStatusFieldsComponent } from './CMS/set/statusfields/main-status-fields/main-status-fields.component';
import { CreateStatusFieldsComponent } from './CMS/set/statusfields/create-status-fields/create-status-fields.component';
import { UpdateStatusFieldsComponent } from './CMS/set/statusfields/update-status-fields/update-status-fields.component';
import { MainStatusUsersComponent } from './CMS/set/status-users/main-status-users/main-status-users.component';
import { MainStatusRoleComponent } from './CMS/set/status-role/main-status-role/main-status-role.component';
import { MainStatusCaseComponent } from './CMS/set/status-case/main-status-case/main-status-case.component';
import { UpdateStatusCaseComponent } from './CMS/set/status-case/update-status-case/update-status-case.component';
import { CreateStatusCaseComponent } from './CMS/set/status-case/create-status-case/create-status-case.component';
import { StatusTypeRoleComponent } from './CMS/set/status-type-role/status-type-role.component';
import { StatusTypeusersComponent } from './CMS/set/status-typeusers/status-typeusers.component';
// admin set
import { MainCountyComponent } from './Admin/set/country/main-county/main-county.component';
import { CreateCountyComponent } from './Admin/set/country/create-county/create-county.component';
import { UpdateCountyComponent } from './Admin/set/country/update-county/update-county.component';
import { MainCityComponent } from './Admin/set/city/main-city/main-city.component';
import { CreateCityComponent } from './Admin/set/city/create-city/create-city.component';
import { UpdateCityComponent } from './Admin/set/city/update-city/update-city.component';
import { MainNationalityComponent } from './Admin/set/nationality/main-nationality/main-nationality.component';
import { CreateNationalityComponent } from './Admin/set/nationality/create-nationality/create-nationality.component';
import { UpdateNationalityComponent } from './Admin/set/nationality/update-nationality/update-nationality.component';
import { ReligionMainComponent } from './Admin/set/religion/religion-main/religion-main.component';
import { CreateReligionComponent } from './Admin/set/religion/create-religion/create-religion.component';
import { UpdateReligionComponent } from './Admin/set/religion/update-religion/update-religion.component';
import { MainCompanyAddressComponent } from './Admin/set/compnay-address/main-company-address/main-company-address.component';
import { CreateCompanyAddressComponent } from './Admin/set/compnay-address/create-company-address/create-company-address.component';
import { UpdateCompanyAddressComponent } from './Admin/set/compnay-address/update-company-address/update-company-address.component';
import { MainSessionComponent } from './Admin/set/session/main-session/main-session.component';
import { DeleteSessionComponent } from './Admin/set/session/delete-session/delete-session.component';
import { AgentRoleComponent } from './CMS/Agent/agent-role/agent-role.component';
import { AgentUserComponent } from './CMS/Agent/agent-user/agent-user.component';
import { CompanyModulesComponent } from './Admin/Company/company-modules/company-modules.component';
import { MainCmsClientComponent } from './CMS/cms-client/main-cms-client/main-cms-client.component';
import { CreateCmsClientComponent } from './CMS/cms-client/create-cms-client/create-cms-client.component';
import { UpdateCmsClientComponent } from './CMS/cms-client/update-cms-client/update-cms-client.component';
import { CmsClientAddressComponent } from './CMS/cms-client/cms-client-address/cms-client-address.component';
import { SmsModule } from './SMS/sms.module';
import { ToolsModule } from './tools/tools.module';


@NgModule({
    declarations: [
        AppComponent,
        SOPMainPriorityComponent ,
        SOPUpdatePriorityComponent,
        UpdateStatusCaseComponent,
        MainStatusCaseComponent,
        DashboardComponent,
        GlobalGridComponent,
        CreateStatusCaseComponent,
        DashboarduserroleComponent,
        ReportuserroleComponent,
        GridActionsComponent,
        LoginComponent,
        LoginCompanyComponent,
        ForgetpassComponent,
        ContactComponent,
        CheckBookComponent,
        CurrencyLookupComponent,
        ClientLookupComponent,
        MainBulkComponent,
        CustomerLookupComponent,
        MainAssignmentComponent,
        CMSContractLookupComponent,
        ItemsBySiteLookupComponent,
        AgentLookupComponent,
        BulkActionEntryComponent,
        COWorkQueueComponent,
        PaymentReceiptComponent,
        AssignmentgenrateComponent,
        PaymentManualComponent,
        CaseAttachementComponent,
        CMSTRXCaseUploadingComponent,
        DoactionComponent,
        CaseEntryComponent,
        CaseEditEntryComponent,
        DebtoreditEnreyComponent,
        BulkCaseModifyComponent,
        BulkCaseassignmentComponent,
        BulkDeleteComponent,
        BulkcustomerComponent,
        COWorkQueueComponent,
        BulkActionComponent,
        DoActionsComponent,
        CaseArchiveComponent,
        ToggleFullscreenDirective,
        MainusersComponent,
        CreateuserComponent,
        UseraccesssecurityComponent,
        MainrolesComponent,
        MainitemComponent,
        CreateitemComponent,
        MaincustomerComponent,
        CreatecustomerComponent,
        MaindebtorsComponent,
        CreatdebtorComponent,
        MainquotationComponent,
        CreatquotationComponent,
        MainAdjustmentComponent,
        CreatadjustmentComponent,
        MaintransferComponent,
        CreatetransferComponent,
        MainbatchComponent,
        CreatbatchComponent,
        MaininquiryComponent,
        CreatinquiryComponent,
        MainglaccountComponent,
        CreateglaccountComponent,
        MaintransentryComponent,
        CreatetransentryComponent,
        MaincaseassignmentComponent,
        CreatcaseaassignmentComponent,
        DoactionAssignmentComponent,
        MaintrxcaseComponent,
        CreatetrxcaseComponent,
        DoactioncaseComponent,
        UploadCasesComponent,
        SmsComponent,
        EmailComponent,
        MainEmployeeComponent,
        AddEmployeeComponent,
        EditEmployeeComponent,
        EdittrxcaseComponent,
        ViewtrxcaseComponent,
        EmployeeLookupComponent,
        NationalityLookupComponent,
        ItemsLookupComponent,
        PublicDynamicReportComponent,
        BulkcustomersComponent,
        CasedeleteComponent,
        CaseUpdateComponent,
        UploadpaymentComponent,
        BulkactionsComponent,
        NotFoundComponent,
      BulkArchiveComponent,
      BulkSMSComponent,
      BulkEmailComponent,
      UserProfileComponent,
      CasePaymentComponent,
      DynamicreportComponent,
        AssignmentComponent,
        DoactionbulkComponent,
        DoactionuploadComponent,
      CaseAttachmentComponent,
      SystemRegistrationKeyComponent,
      UpdateDebtorComponent,
      MainAgentComponent,
      UpdateAgentComponent,
        CreateAgentComponent,
        UpdateuserComponent,
        ChangePasswordComponent,
        MainLetterFormComponent,
        UpdateLetterFormComponent,
        CreateLetterFormComponent,
        CreateLetterTypeComponent,
        MainLetterTypeComponent,
        UpdateLetterTypeComponent,
        MainCompanyComponent,
        UpdateCompanyComponent,
        CreateCompanyComponent,
        WhereConditionComponent,
      PrintLetterComponent,
      RemainderComponent,
      MainReceiptComponent,
      CreateReceiptComponent,
      UpdateReceiptComponent,
      MainReplacementComponent,
      CreateReplacementComponent,
      GlobalFilterComponent,
      CycletraceComponent,
      PortfolioComponent,
      OnlygridComponent,
      OnlyReportComponent,
      MainGridComponent,
      CmsPeriodComponent,
      MainLetterComponent,
      ViewLetterComponent,
      UpdateLetterComponent,
      AdvancebulkletterComponent,
      Mainlookup02Component,
      Createlookup02Component,
      Updatelookup02Component,
      Mainlookup01Component,
      Creatlookup01Component,
      Updatelookup01Component,
      MainDebtorStatusComponent,
      CreatdebtorStatusComponent,
      UpdatedebtorStatusComponent,
      MaindebtgroupComponent,
      CreatdebtgroupComponent,
      UpdatedebtgroupComponent,
      MainPriorityComponent,
      CreatPriorityComponent,
      UpdatePriorityComponent,
      MaindebtorclassComponent,
      CreatdebtorclassComponent,
      UpdatedebtorclassComponent,
      MaindetraddressComponent,
      CreatdetraddressComponent,
      UpdatdetraddressComponent,
      MainagntgroupComponent,
      CreatagntgroupComponent,
      UpdateagntgroupComponent,
      PortfolioGradingComponent,
      PortfolioGradingmonthComponent,
      PortfolioGradingmonthViewComponent,
      PortfolioGradingViewComponent,
      PortfoliocycleComponent,
      PortfoliomovmentComponent,
      Khcb_collectionYTDComponent,
      FeesComponent,
      TrxTypeComponent,
      TrxviewComponent,
      CustomerContactDetailsComponent,
      CreateroleComponent,
      EditroleComponent,
      LookupgridComponent,
      UsersLookupComponent,
      BanklookupComponent,
      AsginmentComponent,
      PaymentapproveComponent,
      CaselookupComponent,
      AuditComponent,
      UserlogComponent,
      MainWorkQueueComponent,
      CreatworkQueueComponent,
      UpdateworkqueueComponent,
      ProvisionytdComponent,
      SuspendincomeComponent,
      RmsproductComponent,
      RmscollectstageComponent,
      RmsagentComponent,
      UsercompanyComponent,
      RoleuserComponent,
      AccesmenuroleComponent,
      StafftargetreportComponent,
      Sop00008MainComponent,
      Sop00008CreateComponent,
      Sop00008EditComponent,
      GlobalSortComponent,
      GlobalFieldCreatorComponent,
      CreateGroupComponent,
      MainAddressTypeComponent,
      CreateAddressTypeComponent,
      UpdateAddressTypeComponent,
      MainClassComponent,
      CreateClassComponent,
      UpdateClassComponent,
      MainCustomerRefranceComponent,
      CreteCustomerRefranceComponent,
      UpdateCustomerRefranceComponent,
      MainGroupComponent,
      UpdateGroupComponent,
      CreatePriorityComponent,
      MainStatusComponent,
      CreateStatusComponent,
      UpdateStatusComponent,
      GlobalOrderComponent,
      AgentcasesComponent,
      RmsptpagentComponent,
      RmsptpproductComponent,
      RmsptpcollectstageComponent,
      DashreminderComponent,
      CollectiondashComponent,
      ActionsdashComponent,
      CasesdashComponent,
      AgentrankdashComponent,
      CallsdashComponent,
      CreatedashComponent,
      ReportdashComponent,
      DashrolesComponent,
      ReportrolesComponent,
      MenutypeComponent,
      SubmenuComponent,
      MenumodulesComponent,
      AgentactivecasesComponent,
      AgentbystatusComponent,
      AgentbyclientComponent,
      AgentbystatsclntComponent,

      TargetagentComponent,

      MainComponent,

      CreateComponent,

      UpdateComponent,

      MainStatusScriptComponent,

      CreateStatusScriptComponent,

      UpdateStatusScriptComponent,



      MainStatusFieldsComponent,

      CreateStatusFieldsComponent,

      UpdateStatusFieldsComponent,

      MainStatusUsersComponent,



      MainStatusRoleComponent,



      StatusTypeRoleComponent,



      StatusTypeusersComponent,



      MainCountyComponent,



      CreateCountyComponent,



      UpdateCountyComponent,



      MainCityComponent,



      CreateCityComponent,



      UpdateCityComponent,



      MainNationalityComponent,



      CreateNationalityComponent,



      UpdateNationalityComponent,



      ReligionMainComponent,



      CreateReligionComponent,



      UpdateReligionComponent,



      MainCompanyAddressComponent,



      CreateCompanyAddressComponent,



      UpdateCompanyAddressComponent,

      MainSessionComponent,
      DeleteSessionComponent,
      AgentRoleComponent,
      AgentUserComponent,
      CompanyModulesComponent,
      MainCmsClientComponent,
      CreateCmsClientComponent,
      UpdateCmsClientComponent,
      CmsClientAddressComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        TabStripModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        ButtonsModule,
        GridModule,
        MultiSelectModule,
        DateInputsModule,
        InputsModule,
        DropDownsModule, AutoCompleteModule, ComboBoxModule,
        SortableModule,
        JsonpModule,
        StockChartModule,
        NgHttpLoaderModule,
        UploadModule,
        TelerikReportingModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            closeButton: true,
            progressAnimation: 'increasing'
        }),
      DialogsModule,
      WindowModule,
      ChartsModule,
      NgIdleKeepaliveModule.forRoot(),
      SmsModule, //SMS MODULE
      ToolsModule, // Tools module
    ],
    entryComponents: [],
    providers: [
      LookUpSetting,
        KaizenService,
        PublicSetting,
      DashboardService,
        CMSShared,
        CMSService,
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
