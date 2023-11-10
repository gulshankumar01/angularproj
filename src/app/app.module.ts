import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdduserComponent } from './components/adduser/adduser.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { PassbookComponent } from './components/passbook/passbook.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { QueriesComponent } from './components/queries/queries.component';
import { FixeddepositComponent } from './components/fixeddeposit/fixeddeposit.component';
import { QueriesadminComponent } from './components/queriesadmin/queriesadmin.component';
import { AdminTransactionComponent } from './components/admin-transaction/admin-transaction.component';
import { AdmincustomerComponent } from './components/admincustomer/admincustomer.component';
import { SettingComponent } from './components/setting/setting.component';
import { AdminacountrequestComponent } from './components/adminacountrequest/adminacountrequest.component';
import { SuccessComponent } from './components/success/success.component'
import { QuerysolutionComponent } from './components/querysolution/querysolution.component';
import { NewqueryupdateComponent } from './components/newqueryupdate/newqueryupdate.component';
import { ApproveregisterComponent } from './components/approveregister/approveregister.component';
import { FullviewComponent } from './components/fullview/fullview.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    UserhomeComponent,
    AdminhomeComponent,
    NavbarComponent,
    AdduserComponent,
    EdituserComponent,
    ViewuserComponent,
    ForgetpasswordComponent,
    RegisteruserComponent,
    TransactionComponent,
    PassbookComponent,
    SpinnerComponent,
    QueriesComponent,
    FixeddepositComponent,
    QueriesadminComponent,
    AdminTransactionComponent,
    AdmincustomerComponent,
    SettingComponent,
    AdminacountrequestComponent,
    SuccessComponent,
    QuerysolutionComponent,
    NewqueryupdateComponent,
    ApproveregisterComponent,
    FullviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
