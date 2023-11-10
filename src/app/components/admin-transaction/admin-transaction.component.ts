import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { NewTransaction } from 'src/app/models/newtransaction';
import { User } from 'src/app/models/user';
import { ContactService } from 'src/app/services/contact.service';

// interface Transaction {
//   transaction_id: number;
//   transdate: Date | null; 
//   amount: number;
//   receiver_acc: number;
//   transtype: string;
// }

// interface AccountType {
//   type_id: number;
//   type_name: string;
// }

// interface Account {
//   acc_no: bigint;
//   balance:bigint;
//   transaction: Transaction[];
//   acounttype: AccountType;
// }

// interface Customer {
//   customer_id: bigint;
//   firstname: string;
//   lastname: string;
//   email: string;
//   accounts: string;
//   account: any[];
// }

// interface Customer {
//   customerId: number;
//   firstname: string;
//   lastname: string;
//   email: string;
//   accounts: string;
//   account: any[]; 
// }




@Component({
  selector: 'app-admin-transaction',
  templateUrl: './admin-transaction.component.html',
  styleUrls: ['./admin-transaction.component.css']
})
export class AdminTransactionComponent implements OnInit {

  public accounts: Account={} as Account;
  public customerr:User={} as User;
 public searchText:any='' 
 
// public newlist:any[]=[];

public newcustomers:NewTransaction[]=[];
public filteredContacts:NewTransaction [] = [];
constructor(private contactservice: ContactService){
  
}

ngOnInit(): void {

  this.getData(); 
}

getData() {
  this.contactservice.getTransactions().subscribe((data) => {
    this.newcustomers = data;
    console.log(data)
  });
}



onSearch(){
  if (!this.searchText) {
    this.filteredContacts = this.newcustomers;
  }
  this.filteredContacts = this.newcustomers.filter((newcustomers) =>
    JSON.stringify(newcustomers)
     .toLowerCase()
      .includes(this.searchText.toLowerCase()))
}

    
  }



