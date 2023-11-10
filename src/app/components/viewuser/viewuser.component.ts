import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionUser } from 'src/app/models/transaction';
import { ContactService } from 'src/app/services/contact.service';
import { CustomerBtId } from '../userhome/userhome.component';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit{
  
 public loading:boolean=false;
 public searchText:string='';
 public errorMessage:boolean=false;
 public filteredContacts:any
public customers:TransactionUser[]=[]
public newcustomers:TransactionUser[]=[]

//public ContactId:string|null=null;

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

  DeleteContact(){}

  isNotEmpty(){}

  onSearch(){}
}

