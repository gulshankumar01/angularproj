import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/account';
import { User } from 'src/app/models/user';
import { CustomerBtId } from '../userhome/userhome.component';
import { ContactService } from 'src/app/services/contact.service';
export enum AccountType {
  SAVINGS = 'SAVINGS',
  CURRENT = 'CURRENT',
  FD = 'FD'
}
@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit {
  public accounts: Account={} as Account;
  public customerr:User={} as User;
 public searchText:any='' 
  NContactId: string | null | undefined;
  onSearch(){}
///////////
  public id: string | undefined;
  public ContactId: bigint | null = null;
  public customerdata: CustomerBtId = {} as CustomerBtId;

  constructor(private activatedRoute: ActivatedRoute, private httpser: ContactService) {
    console.log(this.ContactId);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('contactId');
      if (id !== null && id !== undefined) {
        this.id = id;
        this.ContactId = BigInt(id);

        if (this.ContactId !== null) {
          this.httpser.getCustomersById(this.ContactId).subscribe((data) => {
            console.log(data);
            this.customerdata = data;
          });
        }
      } else {
        // Handle the case where 'id' is null or undefined, if needed.
      }
    });
  }


}
