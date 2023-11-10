import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';

import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { PassbookComponent } from './components/passbook/passbook.component';
import { QueriesComponent } from './components/queries/queries.component';
import { FixeddepositComponent } from './components/fixeddeposit/fixeddeposit.component';
import { AdminacountrequestComponent } from './components/adminacountrequest/adminacountrequest.component';
import { AdmincustomerComponent } from './components/admincustomer/admincustomer.component';
import { SettingComponent } from './components/setting/setting.component';
import { AdminTransactionComponent } from './components/admin-transaction/admin-transaction.component';
import { QueriesadminComponent } from './components/queriesadmin/queriesadmin.component';
import { QuerysolutionComponent } from './components/querysolution/querysolution.component';
import { NewqueryupdateComponent } from './components/newqueryupdate/newqueryupdate.component';
import { ApproveregisterComponent } from './components/approveregister/approveregister.component';



const routes: Routes = [
  {
    path:'',redirectTo:'contacts/login',pathMatch:'full'
  },
  {
    path:'contacts/login',
    component:LoginComponent
  },
  {
    path:'contacts/userhome/:contactId',
    component:UserhomeComponent
  },
  {
    path:'contacts/updatedquery/:contactId',
    component:NewqueryupdateComponent
  },

  {
    path:'contacts/adminhome',
    component:AdminhomeComponent
  },
  {
    path:'contacts/querysolution/:contactId',
    component:QuerysolutionComponent
  },
  {
    path:'contacts/registeruser',
    component:RegisteruserComponent
  },
  {
    path:'contacts/adduser',
    component:AdduserComponent
  },
  
  {
    path:'contacts/forgetpass',
    component:ForgetpasswordComponent
  },
  {
    path:'contacts/edituser',
    component:EdituserComponent
  },
  {
    path:'contacts/viewuser/:contactId',
    component:ViewuserComponent
  },
  {
    path:'contacts/queries/:contactId',
    component:QueriesComponent
  },
  {
    path:'contacts/fd/:contactId',
    component:FixeddepositComponent
  },
  {
    path:'contacts/adminaccountreq',
    component:AdminacountrequestComponent
  },
  {
    path:'contacts/admincustomer',
    component:AdmincustomerComponent
  },
  {
    path:'contacts/adminsetting',
    component:SettingComponent
  },
  {
    path:'contacts/admintransaction',
    component:AdminTransactionComponent
  },
  {
    path:'contacts/adminqueries',
    component:QueriesadminComponent
  },
  {
    path:'contacts/adminapproveregister/:contactId',
    component:ApproveregisterComponent
  },
  {
    path:'contacts/transaction/:contactId',
    component:TransactionComponent
  },
  {
    path:'contacts/passbook/:contactId',
    component:PassbookComponent
  },
  { 
    path: '**', 
    component:PageNotFoundComponent 
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
