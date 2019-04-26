import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from "./dashboard/dashboard.component";
import { GridActionsComponent } from "./grid-actions/grid-actions.component";
import { LoginComponent } from "./Admin/login/login.component";
import { ForgetpassComponent } from "./forgetpass/forgetpass.component";


import { ContactComponent } from "./contact/contact.component";
import { BulkActionComponent } from './CMSTransaction/bulk-action/bulk-action.component';
import { DoActionsComponent } from './CMSTransaction/bulk-action/do-actions/do-actions.component';
import { DynamicreportComponent } from './Global/Reports/dynamicreport/dynamicreport.component';
import { AssignmentComponent } from './CMSTransaction/Bulk/assignment/assignment.component';
import { DoactionuploadComponent } from './CMSTransaction/Bulk/Actions/doactionupload/doactionupload.component';
import { CaseArchiveComponent } from './CMS/Inquiry/case-archive/case-archive.component';
import { MainusersComponent } from './Admin/users/mainusers/mainusers.component';
import { CreateuserComponent } from './Admin/users/createuser/createuser.component';
import { UseraccesssecurityComponent } from './Admin/users/useraccesssecurity/useraccesssecurity.component';
import { MainrolesComponent } from './Admin/roles/mainroles/mainroles.component';
import { UploadCasesComponent } from './CMSTransaction/Bulk/upload-cases/upload-cases.component'
import { PortfolioComponent } from './CMS/Inquiry/portfolio/portfolio.component';
import { OnlygridComponent } from './CMS/Inquiry/onlygrid/onlygrid.component';
import { OnlyReportComponent } from './CMS/Inquiry/only-report/only-report.component';
import { RoleuserComponent } from './Admin/accessuser/roleuser/roleuser.component';
import { UsercompanyComponent } from './Admin/accessuser/usercompany/usercompany.component';
//HR
import { MainEmployeeComponent } from './HR/HR_COMMON/Employee/main-employee/main-employee.component';
import { AddEmployeeComponent } from './HR/HR_COMMON/Employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './HR/HR_COMMON/Employee/edit-employee/edit-employee.component';

// IV
import { MainitemComponent } from './IV/ItemCard/mainitem/mainitem.component';
import { CreateitemComponent } from './IV/ItemCard/createitem/createitem.component'
import { MainAdjustmentComponent } from './IVTransaction/adjustment/main-adjustment/main-adjustment.component';
import { CreatadjustmentComponent } from './IVTransaction/adjustment/creatadjustment/creatadjustment.component'
import { MaintransferComponent } from './IVTransaction/transfer/maintransfer/maintransfer.component';
import { CreatetransferComponent } from './IVTransaction/transfer/createtransfer/createtransfer.component';
import { MainbatchComponent } from './IVTransaction/batch/mainbatch/mainbatch.component';
import { CreatbatchComponent } from './IVTransaction/batch/creatbatch/creatbatch.component'


//SOP
import { MaincustomerComponent } from './SOP/customer/maincustomer/maincustomer.component';
import { CreatecustomerComponent } from './SOP/customer/createcustomer/createcustomer.component'
import { MainquotationComponent } from './SOPTransaction/quotation/mainquotation/mainquotation.component';
import { CreatquotationComponent } from './SOPTransaction/quotation/creatquotation/creatquotation.component'
import { MaininquiryComponent } from './SOPTransaction/customerinquiry/maininquiry/maininquiry.component';
import { CreatinquiryComponent } from './SOPTransaction/customerinquiry/creatinquiry/creatinquiry.component'

//CMS
import { RmsproductComponent } from './CMS/khcb/rmsproduct/rmsproduct.component';
import { RmscollectstageComponent } from './CMS/khcb/rmscollectstage/rmscollectstage.component';
import { RmsagentComponent } from './CMS/khcb/rmsagent/rmsagent.component';
import { RmsptpagentComponent } from './CMS/khcb/rmsptpagent/rmsptpagent.component';
import { RmsptpproductComponent } from './CMS/khcb/rmsptpproduct/rmsptpproduct.component';
import { RmsptpcollectstageComponent } from './CMS/khcb/rmsptpcollectstage/rmsptpcollectstage.component';


import { SuspendincomeComponent } from './CMS/khcb/suspendincome/suspendincome.component';
import { ProvisionytdComponent } from './CMS/khcb/provisionytd/provisionytd.component';
import { MainWorkQueueComponent } from './CMS/AgentWorkQueue/main-work-queue/main-work-queue.component';
import { CreatworkQueueComponent } from './CMS/AgentWorkQueue/creatwork-queue/creatwork-queue.component';
import { UpdateworkqueueComponent } from './CMS/AgentWorkQueue/updateworkqueue/updateworkqueue.component';

import { UpdateReceiptComponent } from './CMSTransaction/receipt/update-receipt/update-receipt.component';
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
import { PortfoliocycleComponent } from './CMS/khcb/portfoliocycle/portfoliocycle.component';
import { PortfoliomovmentComponent } from './CMS/khcb/portfoliomovment/portfoliomovment.component';

import { AdvancebulkletterComponent } from './CMSTransaction/Bulk/letter/advancebulkletter/advancebulkletter.component';
import { CaseUpdateComponent } from './CMSTransaction/Bulk/case-update/case-update.component';
import { MaindebtorsComponent } from './CMS/debtor/maindebtors/maindebtors.component'
import { CreatdebtorComponent } from './CMS/debtor/creatdebtor/creatdebtor.component'
import { MaincaseassignmentComponent } from './CMSTransaction/bulkAssignment/maincaseassignment/maincaseassignment.component';
import { CreatcaseaassignmentComponent } from './CMSTransaction/bulkAssignment/creatcaseaassignment/creatcaseaassignment.component';
import { MaintrxcaseComponent } from './CMSTransaction/trxcase/maintrxcase/maintrxcase.component';
import { CreatetrxcaseComponent } from './CMSTransaction/trxcase/createtrxcase/createtrxcase.component';
import { DoactioncaseComponent } from './CMSTransaction/trxcase/doactioncase/doactioncase.component';
import { SmsComponent } from './CMSTransaction/trxcase/sms/sms.component';
import { EmailComponent } from './CMSTransaction/trxcase/email/email.component'
import { DoactionAssignmentComponent } from './CMSTransaction/bulkAssignment/DoactionAssignment/DoactionAssignment.component';
import { BulkCaseModifyComponent } from './CMSTransaction/bulk-case-modify/bulk-case-modify.component';
import { BulkcustomersComponent } from './CMSTransaction/Bulk/bulkcustomers/bulkcustomers.component';
import { BulkArchiveComponent } from './CMSTransaction/Bulk/archive/bulk-archive.component';

import { MainAgentComponent } from './CMS/Agent/main-agent/main-agent.component';
import { UpdateAgentComponent } from './CMS/Agent/update-agent/update-agent.component';
import { CreateAgentComponent } from './CMS/Agent/create-agent/create-agent.component';

import { DoactionbulkComponent } from './CMSTransaction/Bulk/Actions/doactionbulk/doactionbulk.component';

import { MainLetterFormComponent } from './CMS/Letter/LetterForm/main-letter-form/main-letter-form.component';
import { UpdateLetterFormComponent } from './CMS/Letter/LetterForm/update-letter-form/update-letter-form.component';
import { CreateLetterFormComponent } from './CMS/Letter/LetterForm/create-letter-form/create-letter-form.component';
import { CreateLetterTypeComponent } from './CMS/Letter/LetterType/create-letter-type/create-letter-type.component';
import { MainLetterTypeComponent } from './CMS/Letter/LetterType/main-letter-type/main-letter-type.component';
import { UpdateLetterTypeComponent } from './CMS/Letter/LetterType/update-letter-type/update-letter-type.component';

// GL
import { MainglaccountComponent } from './GL/glaaccount/mainglaccount/mainglaccount.component';
import { CreateglaccountComponent } from './GL/glaaccount/createglaccount/createglaccount.component';
import { MaintransentryComponent } from './GLTransaction/gltrxentry/maintransentry/maintransentry.component';
import { CreatetransentryComponent } from './GLTransaction/gltrxentry/createtransentry/createtransentry.component';

// CMS Transaction
import { EdittrxcaseComponent } from './CMSTransaction/trxcase/edittrxcase/edittrxcase.component';
import { ViewtrxcaseComponent } from "./CMSTransaction/trxcase/viewcase/viewtrxcase.component";
import { PublicDynamicReportComponent } from './report/public-dynamic-report/public-dynamic-report.component';
import { NotFoundComponent } from './notFound/not-found.component'

import { AuthGuard } from './providers/auth/auth.guard'
import { CasedeleteComponent } from "./CMSTransaction/Bulk/casedelete/casedelete.component";
import { RemainderComponent } from "./CMSTransaction/remainder/remainder.component";
import { MainLetterComponent } from './CMSTransaction/Bulk/bulk-letter/main-letter/main-letter.component';
import { ViewLetterComponent } from './CMSTransaction/Bulk/bulk-letter/view-letter/view-letter.component';
import { UpdateLetterComponent } from './CMSTransaction/Bulk/bulk-letter/update-letter/update-letter.component';

// Admin
import { UserProfileComponent } from './Admin/user-profile/user-profile.component';
import { CasePaymentComponent } from "./CMSTransaction/trxcase/case-payment/case-payment.component";
import { SystemRegistrationKeyComponent } from './Admin/license/system-registration-key/system-registration-key.component';
import { UpdateDebtorComponent } from "./CMS/debtor/update-debtor/update-debtor.component";
import { UpdateuserComponent } from './Admin/users/updateuser/updateuser.component';
import { MainCompanyComponent } from './Admin/Company/main-company/main-company.component';
import { UpdateCompanyComponent } from './Admin/Company/update-company/update-company.component';
import { CreateCompanyComponent } from './Admin/Company/create-company/create-company.component';
import { WhereConditionComponent } from "./CMS/Agent/where-condition/where-condition.component";
import { CreateroleComponent } from './Admin/roles/createrole/createrole.component';
import { AccesmenuroleComponent } from './Admin/roles/accesmenurole/accesmenurole.component';

import { EditroleComponent } from './Admin/roles/editrole/editrole.component';
import { ChangePasswordComponent } from './Admin/users/change-password/change-password.component';

// tools
import { MainbuilderComponent } from "./tools/builders/mainbuilder/mainbuilder.component";
import { ViewconditionComponent } from "./tools/builders/viewcondition/viewcondition.component";
import { ViewsortComponent } from "./tools/builders/viewsort/viewsort.component";
import { ViewsfieldsComponent } from "./tools/builders/viewsfields/viewsfields.component";
import { NewbuilderComponent } from "./tools/builders/newbuilder/newbuilder.component";
import { UpdatebuilderComponent } from "./tools/builders/updatebuilder/updatebuilder.component";
import { ViewMaintenanceComponent } from "./tools/builders/view-maintenance/view-maintenance.component";
import { EquasionFieldsComponent } from "./tools/builders/equasion-fields/equasion-fields.component";
import { RoleAccessComponent } from "./tools/builders/role-access/role-access.component";

// Receipt
import { MainReceiptComponent } from './CMSTransaction/receipt/main-receipt/main-receipt.component';
import { CreateReceiptComponent } from './CMSTransaction/receipt/create-receipt/create-receipt.component';
import { MainReplacementComponent } from "./CMSTransaction/replacement/main-replacement/main-replacement.component";
import { CreateReplacementComponent } from "./CMSTransaction/replacement/create-replacement/create-replacement.component";

import { Khcb_collectionYTDComponent } from './CMS/khcb/khcb_collectionYTD/khcb_collectionYTD.component';

import { PaymentapproveComponent } from './CMSTransaction/receipt/paymentapprove/paymentapprove.component';
import { AuditComponent } from './Admin/users/audit/audit.component';
import { UserlogComponent } from './Admin/users/userlog/userlog.component';

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
import { CreatePriorityComponent } from './SOP/set/priority/create-priority/create-priority.component';
import { SOPMainPriorityComponent } from './SOP/set/priority/main-priority/main-priority.component';
import { SOPUpdatePriorityComponent } from './SOP/set/priority/update-priority/update-priority.component';

import { MainStatusComponent } from './SOP/set/status/main-status/main-status.component';
import { CreateStatusComponent } from './SOP/set/status/create-status/create-status.component';
import { UpdateStatusComponent } from './SOP/set/status/update-status/update-status.component';
import { ViewReorderComponent } from "./tools/builders/view-reorder/view-reorder.component";
import { ViewsortConfComponent } from "./tools/builders/configurations/viewsort/viewsort.component";
import { ViewReorderConfComponent } from "./tools/builders/configurations/view-reorder-conf/view-reorder-conf.component";
import { ViewFieldsConfComponent } from "./tools/builders/configurations/view-fields/view-fields.component";

//   sms
import { MainrecieverComponent } from './SMS/Transaction/Receivers/mainreciever/mainreciever.component';
import { CreaterecieverComponent } from './SMS/Transaction/Receivers/createreciever/createreciever.component';
import { EditrecieverComponent } from './SMS/Transaction/Receivers/editreciever/editreciever.component';
import { GrouprecieverComponent } from './SMS/Transaction/Receivers/groupreciever/groupreciever.component';
import { MainsmsComponent } from './SMS/Transaction/sending/mainsms/mainsms.component';
import { CreatesmsComponent } from './SMS/Transaction/sending/createsms/createsms.component';
import { ViewsmsComponent } from './SMS/Transaction/sending/viewsms/viewsms.component';
import { MaingroupComponent } from './SMS/Set/group/maingroup/maingroup.component';
import { CreatgroupComponent } from './SMS/Set/group/creatgroup/creatgroup.component';
import { EditgroupComponent } from './SMS/Set/group/editgroup/editgroup.component';
import { MainsmsaccountComponent } from './SMS/Set/account/mainsmsaccount/mainsmsaccount.component';
import { CreatesmsaccountComponent } from './SMS/Set/account/createsmsaccount/createsmsaccount.component';
import { EditsmsaccountComponent } from './SMS/Set/account/editsmsaccount/editsmsaccount.component';
import { MainsmstemplateComponent } from './SMS/Set/template/mainsmstemplate/mainsmstemplate.component';
import { CreatesmstemplateComponent } from './SMS/Set/template/createsmstemplate/createsmstemplate.component';
import { EditsmstemplateComponent } from './SMS/Set/template/editsmstemplate/editsmstemplate.component';
// Dashboard
import { CreatedashComponent } from './dashboard/Set/createdash/createdash.component';
import { ReportdashComponent } from './dashboard/Set/reportdash/reportdash.component';
import { DashrolesComponent } from './dashboard/Set/dashroles/dashroles.component';
import { ReportrolesComponent } from './dashboard/Set/reportroles/reportroles.component';
import { ReportuserroleComponent } from './dashboard/Set/reportuserrole/reportuserrole.component';
import { DashboarduserroleComponent } from './dashboard/Set/dashboarduserrole/dashboarduserrole.component';
// Menus
import { MenutypeComponent } from './Admin/MenuType/menutype/menutype.component';
import { SubmenuComponent } from './Admin/MenuType/submenu/submenu.component';
import { MenumodulesComponent } from './Admin/MenuType/menumodules/menumodules.component';
//  slaes man traget
import { TargetagentComponent } from './CMS/Agent/targetagent/targetagent.component';
//
import { Cm00039Component } from './tools/builders/cm00039/cm00039.component';
// fields roles
import { ConfigroleComponent } from './tools/builders/configrole/configrole.component';
import { ConguserComponent } from './tools/builders/conguser/conguser.component';
// containu CMS / SET
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
import { ViewUserComponent } from './tools/builders/view-user/view-user.component';
import { AccountUserComponent } from './SMS/Set/account-user/account-user.component';
import { CompanyModulesComponent } from './Admin/Company/company-modules/company-modules.component';
import { MainCmsClientComponent } from './CMS/cms-client/main-cms-client/main-cms-client.component';
import { CreateCmsClientComponent } from './CMS/cms-client/create-cms-client/create-cms-client.component';
import { UpdateCmsClientComponent } from './CMS/cms-client/update-cms-client/update-cms-client.component';
import { CmsClientAddressComponent } from './CMS/cms-client/cms-client-address/cms-client-address.component';

const appRoutes: Routes = [//
  {
    path: '',
    data: {
      breadcrumb: 'Dashboard',
    },
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
 
  , {
      path: 'MainCmsClient',
      data: {
          breadcrumb: 'MainCmsClient',
      },
      component: MainCmsClientComponent,
      canActivate: [AuthGuard]
  }, {
      path: 'CreateCmsClient',
      data: {
          breadcrumb: 'CreateCmsClient',
      },
      component: CreateCmsClientComponent, 
      canActivate: [AuthGuard]
  }, {
      path: 'UpdateCmsClient/:id',
      data: {
          breadcrumb: 'UpdateCmsClient',
      },
      component: UpdateCmsClientComponent,
      canActivate: [AuthGuard]
  }, {
      path: 'CmsClientAddress',
      data: {
          breadcrumb: 'CmsClientAddress',
      },
      component: CmsClientAddressComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'CompanyModules',
      data: {
          breadcrumb: 'CompanyModules',
      },
      component: CompanyModulesComponent,
      canActivate: [AuthGuard]
  },{
      path: 'AccountUser',
      data: {
          breadcrumb: 'AccountUser',
      },
      component: AccountUserComponent,
      canActivate: [AuthGuard]
  }, {
    path: 'AgentUser',
    data: {
      breadcrumb: 'AgentUser',
    },
    component: AgentUserComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'AgentRole',
    data: {
      breadcrumb: 'AgentRole',
    },
    component: AgentRoleComponent,
    canActivate: [AuthGuard]
  }
  
  , {
    path: 'DeleteSession/:userName/:SequenceName',
    data: {
      breadcrumb: 'DeleteSession',
    },
    component: DeleteSessionComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'MainCompanyAddress',
    data: {
      breadcrumb: 'MainCompanyAddress',
    },
    component: MainCompanyAddressComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'CreateCompanyAddress',
    data: {
      breadcrumb: 'CreateCompanyAddress',
    },
    component: CreateCompanyAddressComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'UpdateCompanyAddress/:id',
    data: {
      breadcrumb: 'UpdateCompanyAddress',
    },
    component: UpdateCompanyAddressComponent,
    canActivate: [AuthGuard]
  }
  , {
    path: 'UserCompanyaccesssecurity',
    data: {
      breadcrumb: 'Setup >> User Company access',
    },
    component: UseraccesssecurityComponent,
    canActivate: [AuthGuard]
  }
  ,{
    path: 'Submenu/:src',
    data: {
      breadcrumb: 'Setup >> Modules',
    },
    component: SubmenuComponent,
    canActivate: [AuthGuard]
  }
  ,{
    path: 'Menumodules/:src',
    data: {
      breadcrumb: 'Setup >> Screens',
    },
    component: MenumodulesComponent,
    canActivate: [AuthGuard]
  }
  ,{
    path: 'Menutype/:src',
    data: {
      breadcrumb: 'Setup >> Menu Type',
    },
    component: MenutypeComponent,
    canActivate: [AuthGuard]
  }
  , {
    path: 'MainSession/:src',
    data: {
      breadcrumb: 'In-Process Session',
    },
    component: MainSessionComponent,
    canActivate: [AuthGuard]
  }
  ,{
    path: 'ReligionMain/:src',
    data: {
      breadcrumb: 'Setup >> Religion',
    },
    component: ReligionMainComponent,
    canActivate: [AuthGuard]
  }
  ,{
    path: 'CreateReligion',
    data: {
      breadcrumb: 'Setup >> Create Religion',
    },
    component: CreateReligionComponent,
    canActivate: [AuthGuard]
  }
  , {
    path: 'UpdateReligion/:id',
    data: {
      breadcrumb: 'Setup >> Update Religion',
    },
    component: UpdateReligionComponent,
    canActivate: [AuthGuard]
  }
  ,{
    path: 'MainNationality/:src',
    data: {
      breadcrumb: 'Setup >> Nationality',
    },
    component: MainNationalityComponent,
    canActivate: [AuthGuard]
  }
  , {
    path: 'CreateNationality',
    data: {
      breadcrumb: 'Setup >> Create Nationality',
    },
    component: CreateNationalityComponent,
    canActivate: [AuthGuard]
  }
  , {
    path: 'UpdateNationality/:id',
    data: {
      breadcrumb: 'Setup >> Update Nationality',
    },
    component: UpdateNationalityComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'MainCity/:src',
    data: {
      breadcrumb: 'Setup >> Cities',
    },
    component: MainCityComponent,
    canActivate: [AuthGuard]
  }
  , {
    path: 'UpdateCity/:id',
    data: {
      breadcrumb: 'Setup >> Update Cities',
    },
    component: UpdateCityComponent,
    canActivate: [AuthGuard]
  }
  , {
    path: 'CreateCity',
    data: {
      breadcrumb: 'Setup >> Create Cities',
    },
    component: CreateCityComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'MainCounty/:src',
    data: {
      breadcrumb: 'Setup >> Countries',
    },
    component: MainCountyComponent,
    canActivate: [AuthGuard]
  }
  ,{
    path: 'CreateCounty',
    data: {
      breadcrumb: 'Setup >> Create Countries',
    },
    component: CreateCountyComponent,
    canActivate: [AuthGuard]
  }
  , {
    path: 'UpdateCounty/:id',
    data: {
      breadcrumb: 'Setup >> Update Countries',
    },
    component: UpdateCountyComponent,
    canActivate: [AuthGuard]
  }
  //-------------------------------------------------------------------------------
  ,{
    path: 'StatusTypeusers',
    data: {
      breadcrumb: 'StatusTypeusers',
    },
    component: StatusTypeusersComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'StatusTypeRole',
    data: {
      breadcrumb: 'StatusTypeRole',
    },
    component: StatusTypeRoleComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'MainStatusUsers',
    data: {
      breadcrumb: 'MainStatusUsers',
    },
    component: MainStatusUsersComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'MainStatusRole',
    data: {
      breadcrumb: 'MainStatusRole',
    },
    component: MainStatusRoleComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'MainStatusCase',
    data: {
      breadcrumb: 'MainStatusCase',
    },
    component: MainStatusCaseComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'CreateStatusCase',
    data: {
      breadcrumb: 'CreateStatusCase',
    },
    component: CreateStatusCaseComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'UpdateStatusCase/:id',
    data: {
      breadcrumb: 'UpdateStatusCase',
    },
    component: UpdateStatusCaseComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'MainStatusFields',
    data: {
      breadcrumb: 'MainStatusFields',
    },
    component: MainStatusFieldsComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'CreateStatusFields',
    data: {
      breadcrumb: 'CreateStatusFields',
    },
    component: CreateStatusFieldsComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'UpdateStatusFields/:id/:FieldCode',
    data: {
      breadcrumb: 'UpdateStatusFields',
    },
    component: UpdateStatusFieldsComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'MainStatusScript',
    data: {
      breadcrumb: 'MainStatusScript',
    },
    component: MainStatusScriptComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'CreateStatusScript',
    data: {
      breadcrumb: 'CreateStatusScript',
    },
    component: CreateStatusScriptComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'UpdateStatusScript/:id',
    data: {
      breadcrumb: 'UpdateStatusScript',
    },
    component: UpdateStatusScriptComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'MainstatusTask',
    data: {
      breadcrumb: 'MainstatusTask',
    },
    component: MainComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'createstatusTask',
    data: {
      breadcrumb: 'createstatusTask',
    },
    component: CreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'updatestatusTask/:id',
    data: {
      breadcrumb: 'Update status Task',
    },
    component: UpdateComponent,
    canActivate: [AuthGuard]

  },
  //---------------------------------------- Enquiry Builder
  {
    path: 'views_maintenance/:src',
    data: {
      breadcrumb: 'Enquiry Builder >> View Maintenance',
    },
    component: ViewMaintenanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'views_fields/:src',
    data: {
      breadcrumb: 'Enquiry Builder >> View Fields',
    },
    component: ViewsfieldsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sort_view/:src',
    data: {
      breadcrumb: 'Enquiry Builder >> View Sort Criteria',
    },
    component: ViewsortComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view_condition/:src',
    data: {
      breadcrumb: 'Enquiry Builder >> View Where Criteria',
    },
    component: ViewconditionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reorder_view/:src',
    data: {
      breadcrumb: 'Enquiry Builder >> View Fields Reorder',
    },
    component: ViewReorderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'role_access',
    data: {
      breadcrumb: 'Enquiry Builder >> View Role Security',
    },
    component: RoleAccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ViewUser/:src',
    data: {
      breadcrumb: 'Enquiry Builder >> View Access Security',
    },
    component: ViewUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Configrole',
    data: {
      breadcrumb: 'Enquiry Builder >> Role Access Level',
    },
    component: ConfigroleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Conguser/:src',
    data: {
      breadcrumb: 'Enquiry Builder >> User Access Level',
    },
    component: ConguserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_builder',
    data: {
      breadcrumb: 'main_builder',
    },
    component: NewbuilderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update_builder',
    data: {
      breadcrumb: 'main_builder',
    },
    component: UpdatebuilderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Cm00039',
    data: {
      breadcrumb: 'Cm00039',
    },
    component: Cm00039Component,
    canActivate: [AuthGuard]
  },
  //----------------------------------------

  {
    path: 'Targetagent',
    data: {
      breadcrumb: 'Targetagent',
    },
    component: TargetagentComponent,
    canActivate: [AuthGuard]
  },
  // menus

  

 
  //  dashboard
  {
    path: 'Createdash/:src',
    data: {
      breadcrumb: 'Create dashboard ',
    },
    component: CreatedashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Reportdash',
    data: {
      breadcrumb: 'Report dashboard ',
    },
    component: ReportdashComponent,
    canActivate: [AuthGuard]


  }, {
    path: 'Dashroles',
    data: {
      breadcrumb: 'Report dashboard ',
    },
    component: DashrolesComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'Reportroles',
    data: {
      breadcrumb: 'Report dashboard ',
    },
    component: ReportrolesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Reportuserrole',
    data: {
      breadcrumb: 'Report dashboard ',
    },
    component: ReportuserroleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Dashboarduserrole',
    data: {
      breadcrumb: 'Report dashboard ',
    },
    component: DashboarduserroleComponent,
    canActivate: [AuthGuard]
  },
  // sms
  {
    path: 'Mainreciever/:src',
    data: {
      breadcrumb: 'SMS >> Contact Numbers',
    },
    component: MainrecieverComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Createreciever',
    data: {
      breadcrumb: 'SMS >> Create Contact Numbers',
    },
    component: CreaterecieverComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Editreciever/:id',
    data: {
      breadcrumb: 'SMS >> Update Contact Numbers',
    },
    component: EditrecieverComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Groupreciever/:src',
    data: {
      breadcrumb: 'SMS >> Group',
    },
    component: GrouprecieverComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'SMSMaingroup/:src',
    data: {
      breadcrumb: 'SMS >> Group Setup',
    },
    component: MaingroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'SMSCreatgroup',
    data: {
      breadcrumb: 'SMS >> Create Group Setup',
    },
    component: CreatgroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'SMSEditgroup/:id',
    data: {
      breadcrumb: 'SMS >> Update Group Setup',
    },
    component: EditgroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Mainsmsaccount/:src',
    data: {
      breadcrumb: 'SMS >> Account Setup',
    },
    component: MainsmsaccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Createsmsaccount',
    data: {
      breadcrumb: 'SMS >> Create Account',
    },
    component: CreatesmsaccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Editsmsaccount/:id',
    data: {
      breadcrumb: 'SMS >> Update Account',
    },
    component: EditsmsaccountComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'Mainsmstemplate/:src',
    data: {
      breadcrumb: 'SMS >> Template Setup',
    },
    component: MainsmstemplateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Createsmstemplate',
    data: {
      breadcrumb: 'SMS >> Create Template',
    },
    component: CreatesmstemplateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Editsmstemplate/:id',
    data: {
      breadcrumb: 'SMS >> Update Template',
    },
    component: EditsmstemplateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Createsms',
    data: {
      breadcrumb: 'SMS >> s',
    },
    component: CreatesmsComponent,
    canActivate: [AuthGuard]
  },
  //  SOP Set
  {

    path: 'create_sop00011',
    data: {
      breadcrumb: 'Sop00011 create',
    },
    component: CreateGroupComponent,
    canActivate: [AuthGuard]
  },
  {

    path: 'update_sop00011/:id',
    data: {
      breadcrumb: 'Sop00011 update',
    },
    component: UpdateGroupComponent,
    canActivate: [AuthGuard]
  }, {

    path: 'main_sop00011',
    data: {
      breadcrumb: 'Sop00011 main',
    },
    component: MainGroupComponent,
    canActivate: [AuthGuard]
  },
  {

    path: 'create_Sop00012',
    data: {
      breadcrumb: 'Sop00012 create',
    },
    component: CreatePriorityComponent,
    canActivate: [AuthGuard]
  }, {

    path: 'update_sop00012/:id',
    data: {
      breadcrumb: 'Sop00012 create',
    },
    component: SOPUpdatePriorityComponent,
    canActivate: [AuthGuard]
  },

  {

    path: 'main_sop00012',
    data: {
      breadcrumb: 'Sop00012 main',
    },
    component: SOPMainPriorityComponent,
    canActivate: [AuthGuard]
  }, {

    path: 'main_sop00014',
    data: {
      breadcrumb: 'Sop00014 main',
    },
    component: MainStatusComponent,
    canActivate: [AuthGuard]
  },
  {

    path: 'create_Sop00014',
    data: {
      breadcrumb: 'Sop00014 create',
    },
    component: CreateStatusComponent,
    canActivate: [AuthGuard]
  },
  {

    path: 'update_sop00014/:id',
    data: {
      breadcrumb: 'Sop00014 update',
    },
    component: UpdateStatusComponent,
    canActivate: [AuthGuard]
  }, {

    path: 'create_Sop00010',
    data: {
      breadcrumb: 'Sop00010   Create ',
    },
    component: CreateClassComponent,
    canActivate: [AuthGuard]
  }, {

    path: 'update_sop00010/:id',
    data: {
      breadcrumb: 'Sop00010   update',
    },
    component: UpdateClassComponent,
    canActivate: [AuthGuard]
  }, {

    path: 'main_sop00010',
    data: {
      breadcrumb: 'Sop00010   update',
    },
    component: MainClassComponent,
    canActivate: [AuthGuard]
  }, {

    path: 'update_sop00009/:id',
    data: {
      breadcrumb: 'Sop00009   update',
    },
    component: UpdateAddressTypeComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'sop00009_main',
    data: {
      breadcrumb: 'Sop00009   Main',
    },
    component: MainAddressTypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_Sop00009',
    data: {
      breadcrumb: 'Sop00009   Create',
    },
    component: CreateAddressTypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sop00008_main',
    data: {
      breadcrumb: 'Sop00008   Main',
    },
    component: Sop00008MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_Sop00008',
    data: {
      breadcrumb: 'Edit Sop00008   ',
    },
    component: Sop00008CreateComponent,
    canActivate: [AuthGuard]
  },
  {

    path: 'update_sop00008/:id',
    data: {
      breadcrumb: 'create Sop00008   ',
    },
    component: Sop00008EditComponent,
    canActivate: [AuthGuard]
  },


  {
    path: 'Advancebulkletter',
    data: {
      breadcrumb: 'Letter Generator',
    },
    component: AdvancebulkletterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Onlygrid/:src',
    data: {
      breadcrumb: 'Data View',
    },
    component: OnlygridComponent,
    canActivate: [AuthGuard]
  },
  { //
    path: 'OnlyReport/:src',
    data: {
      breadcrumb: 'Data View',
    },
    component: OnlyReportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_Portfolio/:src',
    data: {
      breadcrumb: 'CMS >> Agent Performance',
    },
    component: PortfolioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Doactionbulk',
    data: {
      breadcrumb: 'Bulk DO Action Uploading >> DO Action',
    },
    component: DoactionbulkComponent,
  },
  {
    path: 'BulkDoactionupload',
    data: {
      breadcrumb: 'Bulk DO Action Uploading',
    },
    component: DoactionuploadComponent,
  },
  {
    path: 'Assignment',
    data: {
      breadcrumb: 'Bulk Assignment',
    },
    component: AssignmentComponent,
  },
  {
    path: 'Dynamicreport',
    data: {
      breadcrumb: 'Dynamicreport',
    },
    component: DynamicreportComponent,
  },
  {
    path: 'TRX_BulkActions/:src',
    component: BulkActionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'do_action/:src',
    component: DoActionsComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard',
    },
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actions',
    data: {
      breadcrumb: 'Action',
    },
    component: GridActionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    data: {
      breadcrumb: 'Login'
    },
    component: LoginComponent
  },
  {
    path: 'recover',
    data: {
      breadcrumb: 'Recover',
    },
    component: ForgetpassComponent
  },
  {
    path: 'Roleuser',
    data: {
      breadcrumb: 'Admin > User Role Assignment'
    },
    component: RoleuserComponent
  }, {
    path: 'contact',
    data: {
      breadcrumb: 'Contact',
    },
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Inq_CaseArchive/:src',
    data: {
      breadcrumb: 'Case Archive',
    },
    component: CaseArchiveComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add_new_case',
    data: {
      breadcrumb: 'Add New Case',
    },
    component: CreatetrxcaseComponent
  },
  {
    path: 'SysUser/:src',
    data: {
      breadcrumb: 'Users Management',
    },
    component: MainusersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'createuser',
    data: {
      breadcrumb: 'Security User Entry',
    },
    component: CreateuserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'updateuser/:UserName',
    data: {
      breadcrumb: 'Update User',
    },
    component: UpdateuserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Usercompany',
    data: {
      breadcrumb: 'User Company Access',
    },
    component: UsercompanyComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'ChangePassword',
    data: {
      breadcrumb: 'Reset Password',
    },
    component: ChangePasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Sys_Company/:src',
    data: {
      breadcrumb: 'Company Grid',
    },
    component: MainCompanyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_company',
    data: {
      breadcrumb: 'Create Company',
    },
    component: CreateCompanyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update_company',
    data: {
      breadcrumb: 'Edit Company',
    },
    component: UpdateCompanyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Sys_role/:src',
    data: {
      breadcrumb: 'Roles Management',
    },
    component: MainrolesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Accesmenurole',
    data: {
      breadcrumb: 'Roles Access ',
    },
    component: AccesmenuroleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Sys_create_role',
    data: {
      breadcrumb: 'Roles Management_ create',
    },
    component: CreateroleComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'Sys_edit_role/:id',
    data: {
      breadcrumb: 'Roles Management_ Edit ',
    },
    component: EditroleComponent,
    canActivate: [AuthGuard]
  }
  //--------------- IV
  ,
  {
    path: 'MasterItem/:src',
    data: {
      breadcrumb: 'Item Card',
    },
    component: MainitemComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'createitem',
    data: {
      breadcrumb: 'Item Maintenance',
    },
    component: CreateitemComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'IV_Trx_Adjust/:src',
    data: {
      breadcrumb: 'MainAdjustmentComponent',
    },
    component: MainAdjustmentComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'creatadjustment',
    data: {
      breadcrumb: 'creatadjustment',
    },
    component: CreatadjustmentComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'IV_Trx_Transfer/:src',
    data: {
      breadcrumb: 'MaintransferComponent',
    },
    component: MaintransferComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'createtransfer',
    data: {
      breadcrumb: 'CreatetransferComponent',
    },
    component: CreatetransferComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'INV_Batch/:src',
    data: {
      breadcrumb: 'MainbatchComponent',
    },
    component: MainbatchComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'creatbatch',
    data: {
      breadcrumb: 'creatbatch',
    },
    component: CreatbatchComponent,
    canActivate: [AuthGuard]
  }
  //--------------- SOP
  ,
  {
    path: 'SOP_Customer/:src',
    data: {
      breadcrumb: 'Customer Card',
    },
    component: MaincustomerComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'createcustomer',
    data: {
      breadcrumb: 'Customer Maintenance',
    },
    component: CreatecustomerComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'SOP_Quote/:src',
    data: {
      breadcrumb: 'Quotation Master',
    },
    component: MainquotationComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'creatquotation',
    data: {
      breadcrumb: 'Creat Quotation',
    },
    component: CreatquotationComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'CustmrInquiry/:src',
    data: {
      breadcrumb: 'MaininquiryComponent',
    },
    component: MaininquiryComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'creatinquiry',
    data: {
      breadcrumb: 'CreatinquiryComponent',
    },
    component: CreatinquiryComponent,
    canActivate: [AuthGuard]
  },

  //--------------- CMS
  {
    path: 'PortfolioMovment/:src',
    data: {
      breadcrumb: 'Portfolio Cycle yearly',
    },
    component: PortfoliomovmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Portfoliocycle/:src',
    data: {
      breadcrumb: 'Portfolio Cycle yearly',
    },
    component: PortfoliocycleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Portfolio_Grading/:src',
    data: {
      breadcrumb: 'Portfolio Grading yearly',
    },
    component: PortfolioGradingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Portfolio_GradingMonthly/:src',
    data: {
      breadcrumb: 'Portfolio Grading Monthly',
    },
    component: PortfolioGradingmonthComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_Reminder/:src',
    data: {
      breadcrumb: 'Remainder Component',
    },
    component: RemainderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Uti_Letter/:src',
    data: {
      breadcrumb: 'Letter Form',
    },
    component: MainLetterFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update_letter_form',
    data: {
      breadcrumb: 'Letter Form',
    },
    component: UpdateLetterFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_letter_form',
    data: {
      breadcrumb: 'Letter Form',
    },
    component: CreateLetterFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'letter_type/:src',
    data: {
      breadcrumb: 'Letter type',
    },
    component: MainLetterTypeComponent,
    canActivate: [AuthGuard]


  },
  {
    path: 'update_letter_type',
    data: {
      breadcrumb: 'Letter type',
    },
    component: UpdateLetterTypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_letter_type',
    data: {
      breadcrumb: 'Letter type',
    },
    component: CreateLetterTypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_AgentGroup/:src',
    data: {
      breadcrumb: 'Main Agent',
    },
    component: MainagntgroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_debtor_status',
    data: {
      breadcrumb: 'CMS_debtor_status',
    },
    component: MainDebtorStatusComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_debtor_status',
    data: {
      breadcrumb: 'Create_debtor_status',
    },
    component: CreatdebtorStatusComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update_debtor_status/:id',
    data: {
      breadcrumb: 'Create_debtor_status',
    },
    component: UpdatedebtorStatusComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_debtor_adderss',
    data: {
      breadcrumb: 'CMS_debtor_adderss',
    },
    component: MaindetraddressComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Create_debtor_adderss',
    data: {
      breadcrumb: 'Create_debtor_status',
    },
    component: CreatdetraddressComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update_debtor_address/:id',
    data: {
      breadcrumb: 'update_debtor_adderss',
    },
    component: UpdatdetraddressComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_DebtorClass/:src',
    data: {
      breadcrumb: 'CMS_debtor_class',
    },
    component: MaindebtorclassComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_debtor_class',
    data: {
      breadcrumb: 'create_debtor_class',
    },
    component: CreatdebtorclassComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update_debtor_class/:id',
    data: {
      breadcrumb: 'update_debtor_class',
    },
    component: UpdatedebtorclassComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'CMS_lookup01',
    data: {
      breadcrumb: 'Main lookup 01',
    },
    component: Mainlookup01Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'Create_lookup01',
    data: {
      breadcrumb: 'create lookup 01',
    },
    component: Creatlookup01Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'update_lookup01/:id',
    data: {
      breadcrumb: 'update lookup 01',
    },
    component: Updatelookup01Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_lookup02',
    data: {
      breadcrumb: 'Main lookup 02',
    },
    component: Mainlookup02Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMSUpdateReceipt/:PaymentID',
    data: {
      breadcrumb: 'CMS > Payments > Payment Update',
    },
    component: UpdateReceiptComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_lookup02',
    data: {
      breadcrumb: 'create lookup 02',
    },
    component: Createlookup02Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'update_lookup02/:id',
    data: {
      breadcrumb: 'update lookup 02',
    },
    component: Updatelookup02Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_priority',
    data: {
      breadcrumb: 'Main pirority',
    },
    component: MainPriorityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_priority',
    data: {
      breadcrumb: 'create pirority',
    },
    component: CreatPriorityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update_priority/:id',
    data: {
      breadcrumb: 'upadte pirority',
    },
    component: UpdatePriorityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_debtorGroup/:src',
    data: {
      breadcrumb: 'Main debtor group',
    },
    component: MaindebtgroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_debtorGroup',
    data: {
      breadcrumb: 'craete debtor group',
    },
    component: CreatdebtgroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update_debtorGroup/:id',
    data: {
      breadcrumb: 'update debtor group',
    },
    component: UpdatedebtgroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_Agent/:src',
    data: {
      breadcrumb: 'Main Agent',
    },
    component: MainAgentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Provisionytd/:src',
    data: {
      breadcrumb: 'Provision Summary Report',
    },
    component: ProvisionytdComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Suspendincome/:src',
    data: {
      breadcrumb: 'Suspended Income Summary Report',
    },
    component: SuspendincomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Stafftargetreport/:src',
    data: {
      breadcrumb: 'CMS >> Staff Target Report',
    },
    component: StafftargetreportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Rmscollectstage/:src',
    data: {
      breadcrumb: 'RMS Collection Stage Summary',
    },
    component: RmscollectstageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Rmsagent/:src',
    data: {
      breadcrumb: 'RMS Agent Summary',
    },
    component: RmsagentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Rmsptpagent/:src',
    data: {
      breadcrumb: 'PTP Agent Summary',
    },
    component: RmsptpagentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Rmsptpcollectstage/:src',
    data: {
      breadcrumb: 'PTP  Collection Stage Summary',
    },
    component: RmsptpcollectstageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Rmsptpproduct/:src',
    data: {
      breadcrumb: 'PTP Product Summary',
    },
    component: RmsptpproductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Rmsproduct/:src',
    data: {
      breadcrumb: 'RMS Product Summary',
    },
    component: RmsproductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CO_WorkQueue/:src',
    data: {
      breadcrumb: 'Work Queue',
    },
    component: MainWorkQueueComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CreatworkQueue',
    data: {
      breadcrumb: 'Create work Queue',
    },
    component: CreatworkQueueComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Updateworkqueue/:id',
    data: {
      breadcrumb: 'Update workqueue',
    },
    component: UpdateworkqueueComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_agent',
    data: {
      breadcrumb: 'create agent',
    },
    component: CreateAgentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update_agent/:id',
    data: {
      breadcrumb: 'Update agent',
    },
    component: UpdateAgentComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'where_condition',
    data: {
      breadcrumb: 'CMS > Agent Case Distribution',
    },
    component: WhereConditionComponent,
    canActivate: [AuthGuard]
  },
  // {
  // path: 'create_agent_group',
  // data: {
  //     breadcrumb: 'create agent group',
  // },
  // component: CreatagntgroupComponent,
  // canActivate: [AuthGuard]
  // },
  // {
  //     path: 'update_agent_group/:id',
  //     data: {
  //         breadcrumb: 'create agent group',
  //     },
  //     component: UpdateagntgroupComponent,
  //     canActivate: [AuthGuard]
  // },
  {
    path: 'BulkArchive',
    data: {
      breadcrumb: 'BulkArchiveComponent BulkArchiveComponent',
    },
    component: BulkArchiveComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'Casedelete',
    data: {
      breadcrumb: 'CasedeleteComponent CasedeleteComponent',
    },
    component: CasedeleteComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'CaseUpdate',
    data: {
      breadcrumb: 'CMS > Bulk Case Update Information',
    },
    component: CaseUpdateComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'Bulkcustomers',
    data: {
      breadcrumb: 'BulkcustomersComponent',
    },
    component: BulkcustomersComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'TRX_BulkUpdates',
    data: {
      breadcrumb: 'BulkCaseModifyComponent',
    },
    component: BulkCaseModifyComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'TRX_BulkUpdates/:src',
    data: {
      breadcrumb: 'BulkCaseModifyComponent',
    },
    component: BulkCaseModifyComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'CMS_Case/:src',
    data: {
      breadcrumb: 'Case Transaction Entry',
    },
    component: MaintrxcaseComponent,
    canActivate: [AuthGuard]
  }

  ,
  {
    path: 'doactioncase',
    data: {
      breadcrumb: 'Debtors',
    },
    component: DoactioncaseComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'CMSPaymentapprove',
    data: {
      breadcrumb: 'CMS > Payment  >  Mass Approval',
    },
    component: PaymentapproveComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'Audit',
    data: {
      breadcrumb: 'Admin > Users > Audit Trail ',
    },
    component: AuditComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'Userlog',
    data: {
      breadcrumb: 'Admin > Users > User Log History ',
    },
    component: UserlogComponent,
    canActivate: [AuthGuard]
  }
  ,//
  {
    path: 'smscase',
    data: {
      breadcrumb: 'smscase',
    },
    component: SmsComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'emailcase',
    data: {
      breadcrumb: 'emailcase',
    },
    component: EmailComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'Co_Debtor/:src',
    data: {
      breadcrumb: 'Debtors',
    },
    component: MaindebtorsComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'createdebtor',
    data: {
      breadcrumb: 'Create Debtor',
    },
    component: CreatdebtorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'updatedebtor/:debtorId/:trxId',
    data: {
      breadcrumb: 'Update Debtor',
    },
    component: UpdateDebtorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'maincasepayment',
    data: {
      breadcrumb: 'Main case payment Component',
    },
    component: CasePaymentComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'TRX_BulkAssignment/:src',
    data: {
      breadcrumb: 'MaincaseassignmentComponent',
    },
    component: MaincaseassignmentComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'creatcaseaassignment',
    data: {
      breadcrumb: 'CreatcaseaassignmentComponent',
    },
    component: CreatcaseaassignmentComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'editTrxCase/:caseRef/:trxTypeId',
    data: {
      breadcrumb: 'Edit Transaction',
    },
    component: EdittrxcaseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewTrxCase/:caseRef/:trxTypeId',
    data: {
      breadcrumb: 'CMS > Case Maintenance',
    },
    component: ViewtrxcaseComponent,
    canActivate: [AuthGuard]
  }

  //--------------- GL
  ,
  {
    path: 'GL_GL/:src',
    data: {
      breadcrumb: 'MainglaccountComponent',
    },
    component: MainglaccountComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'createglaccount',
    data: {
      breadcrumb: 'CreateglaccountComponent',
    },
    component: CreateglaccountComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'GL_TRX_GLEntry/:src',
    data: {
      breadcrumb: 'MaintransentryComponent',
    },
    component: MaintransentryComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'createtransentry',
    data: {
      breadcrumb: 'CreatetransentryComponent',
    },
    component: CreatetransentryComponent,
    canActivate: [AuthGuard]
  },
  // ---------------------- HR
  {
    path: 'HR_Co_Employee/:src',
    data: {
      breadcrumb: 'HR_Main_Employee',
    },
    component: MainEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add_HR_employee',
    data: {
      breadcrumb: 'HR_Add_Employee',
    },
    component: AddEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit_HR_employee',
    data: {
      breadcrumb: 'HR_eDIT_Employee',
    },
    component: EditEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'do_action_assignment',
    data: {
      breadcrumb: 'Do Action Assignment',
    },
    component: DoactionAssignmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'public_report',
    data: {
      breadcrumb: 'public report',
    },
    component: PublicDynamicReportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upload-cases',
    data: {
      breadcrumb: 'upload cases',
    },
    component: UploadCasesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-profile',
    data: {
      breadcrumb: 'User Profile',
    },
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  // tools
  {
    path: 'CMS_CaseType/0',
    data: {
      breadcrumb: 'main_builder',
    },
    component: MainbuilderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_PayReceipt/:src',
    data: {
      breadcrumb: 'CMS > Payments',
    },
    component: MainReceiptComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CMS_Trx_AgentReplacement/:src',
    data: {
      breadcrumb: 'main-replacement',
    },
    component: MainReplacementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Khcb_collectionYTD/:src',
    component: Khcb_collectionYTDComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add_PayReceipt',
    data: {
      breadcrumb: 'CMS > Payments > new Payment',
    },
    component: CreateReceiptComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_replacement',
    data: {
      breadcrumb: 'create-replacement',
    },
    component: CreateReplacementComponent,
    canActivate: [AuthGuard]
  },





  {
    path: 'reorder_conf',
    data: {
      breadcrumb: 'Reorder columns',
    },
    component: ViewReorderConfComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sort_conf',
    data: {
      breadcrumb: 'sort columns',
    },
    component: ViewsortConfComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fields_conf',
    data: {
      breadcrumb: 'view fields columns',
    },
    component: ViewFieldsConfComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'equation_fields',
    data: {
      breadcrumb: 'equation_fields',
    },
    component: EquasionFieldsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'License/:src',
    component: SystemRegistrationKeyComponent,
    canActivate: [AuthGuard]
  },
 
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard]
  } // this Route must Be last One
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }
