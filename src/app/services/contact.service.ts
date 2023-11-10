import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Account } from '../models/account';
import { Customer } from '../models/customeruser';
import { TransactionUser } from '../models/transaction';
import { NewTransaction } from '../models/newtransaction';
import { AmountDepoWit, AmountTrans } from '../components/transaction/transaction.component';
import { UserData } from '../components/login/login.component';
import { CustomerBtId } from '../components/userhome/userhome.component';
import { Mydatanewquery, Mydataquery, Myquery } from '../components/queries/queries.component';
import { User } from '../models/user';
import { Mydatanewq } from '../components/queriesadmin/queriesadmin.component';
import { Gggggquerytrans } from '../models/gggggquerytrans';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class ContactService implements OnInit{

 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private httpclent:HttpClient) {}
  // http://localhost:8085/app/customers
 private serverUrl:string='http://localhost:8085'

 //usertransaction
public getCustomer():Observable<TransactionUser[]>{
  let url=`${this.serverUrl}/app/customers/dto`;
  return this.httpclent.get<TransactionUser[]>(url).pipe(catchError(this.handleError))
  }

  //getting whole transaction
  public getCustomers():Observable<TransactionUser[]>{
    let url=`${this.serverUrl}/app/customers`;
    return this.httpclent.get<TransactionUser[]>(url).pipe(catchError(this.handleError))
    }
    public getCustomersById(id:bigint):Observable<CustomerBtId >{
      let url=`${this.serverUrl}/transaction/${id}`;
      return this.httpclent.get<CustomerBtId >(url).pipe(catchError(this.handleError))
      }

  //wholetransaction
  public getTransactions():Observable<NewTransaction[]>{
    let url=`${this.serverUrl}/transaction/all`;
    return this.httpclent.get<NewTransaction[]>(url).pipe(catchError(this.handleError))
    }
   

//users details for login
    public getUsers():Observable<UserData[]>{
      let url=`${this.serverUrl}/transaction/userdto`;
      return this.httpclent.get<UserData[]>(url).pipe(catchError(this.handleError))
      }


   //get transaction by id   of users
  public getTransactionById(transtId: string): Observable<CustomerBtId> {
    const dataUrl = `${this.serverUrl}/transaction/${transtId}`;
    return this.httpclent.get<CustomerBtId>(dataUrl).pipe(catchError(this.handleError));
  }

 //credit
//  public addCredit(contactId:number,contact:AmountDepoWit):Observable<AmountDepoWit>{
//   let dataUrl=`${this.serverUrl}/contacts/${contactId}`
//   return this.httpclent.put<AmountDepoWit>(dataUrl,contact).pipe(catchError(this.handleError))
// }

 //credit
 public addCredit(contact:AmountDepoWit):Observable<AmountDepoWit>{
  let dataUrl=`${this.serverUrl}/transaction/deposit`
  return this.httpclent.post<AmountDepoWit>(dataUrl,contact).pipe(catchError(this.handleError))
}
/// for withdrawl
public takeWithdraw(contact:AmountDepoWit):Observable<AmountDepoWit>{
  let dataUrl=`${this.serverUrl}/transaction/withdraw`
  return this.httpclent.post<AmountDepoWit>(dataUrl,contact).pipe(catchError(this.handleError))
}
//for transfer
public sendTransfer(contact: AmountTrans):Observable<AmountTrans>{
  let dataUrl=`${this.serverUrl}/transaction/transfer`
  return this.httpclent.post<AmountTrans>(dataUrl,contact).pipe(catchError(this.handleError))
}


////query all getting
public getAllQuery():Observable<Gggggquerytrans[]>{
  let dataUrl=`${this.serverUrl}/query/get/new/all`
  return this.httpclent.get<Gggggquerytrans[]>(dataUrl).pipe(catchError(this.handleError))
}


////query all getting
public getUpdatedQuery(id:number):Observable<Gggggquerytrans>{
  let dataUrl=`${this.serverUrl}/query/many/${id}`
  return this.httpclent.get<Gggggquerytrans>(dataUrl).pipe(catchError(this.handleError))
}

public getByQueryId(id:number):Observable<Gggggquerytrans[]>{
  let dataUrl=`${this.serverUrl}/query/get/${id}`
  return this.httpclent.get<Gggggquerytrans[]>(dataUrl).pipe(catchError(this.handleError))
}
//create query
public sendQuery(data:Mydataquery):Observable<Mydataquery>{
  let dataUrl=`${this.serverUrl}/query/create`
  return this.httpclent.post<Mydataquery>(dataUrl,data).pipe(catchError(this.handleError))
}
//delete contact by id
public deleteCustomer(contactId:string):Observable<{}>{
  let dataUrl=`${this.serverUrl}/contacts/${contactId}`
  return this.httpclent.delete<{}>(dataUrl).pipe(catchError(this.handleError))
}

////sending registration

public sendRegister(data:User):Observable<User>{
  let dataUrl=`${this.serverUrl}/app/query/register`
  return this.httpclent.post<User>(dataUrl,data).pipe(catchError(this.handleError))
}

////register kar rahe hai new ko in register table
public getRequestedAccoun():Observable<User[]>{
  let dataUrl=`${this.serverUrl}/app/register-logs`
  return this.httpclent.get<User[]>(dataUrl).pipe(catchError(this.handleError))
}

public getRequestedAccounById(id:number):Observable<User>{
  let dataUrl=`${this.serverUrl}/app/registerget/${id}`
  return this.httpclent.get<User>(dataUrl).pipe(catchError(this.handleError))
}

/////new ko add kart rahe hai in update
public postRequsetedAccount(data:User):Observable<User[]>{
  let dataUrl=`${this.serverUrl}/app/new`
  return this.httpclent.post<User[]>(dataUrl,data).pipe(catchError(this.handleError))
}

  public handleError(error:HttpErrorResponse){
    let errorMessage:string='';
    if(error.error instanceof ErrorEvent){
      //client error
      errorMessage=`Error :${error.error.message};`
    }
    else{
      //server error
      errorMessage=`Status :${error.status};`
    }
    return throwError(errorMessage);
  }
  
}
