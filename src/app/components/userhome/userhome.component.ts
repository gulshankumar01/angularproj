import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

export interface CustomerBtId {
  customerId: bigint;
  firstname: string;
  lastname: string;
  email: string;
  balance: number;
}

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
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
