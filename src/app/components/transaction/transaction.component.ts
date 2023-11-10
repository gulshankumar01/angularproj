import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

export interface AmountDepoWit {
  balance:bigint;
  contactId:number
}

export interface AmountDepoWits {
  balance:bigint;
  
}
export interface AmountTrans {
  balance:bigint;
  receiver_acc:bigint
  contactId:number
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {
  public id: string | null | undefined;
  public newContactId: number | undefined;
  public depositAmountss:AmountDepoWit={} as AmountDepoWit;
  public depositAmounts:bigint | undefined;
  public withdrawAmountss:AmountDepoWit={} as AmountDepoWit;
  public withdrawAmounts:bigint | undefined;
  public transferAmounts:bigint | undefined
  public receiver_accc:bigint | undefined
  public transferAmountss: AmountTrans={} as  AmountTrans;


  constructor( private activatedRoute:ActivatedRoute,private httpser :ContactService){
    console.log(this.depositAmounts)
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('contactId');
      if (id !== null && id !== undefined) {
        this.id = id;
        this.newContactId = Number(id)
      } else {
        // Handle the case where 'id' is null or undefined, if needed.
      }
    });
  }

  onDeposit(){
    if (this.depositAmounts && this.newContactId !== undefined) {
      this.depositAmountss = {
        balance: this.depositAmounts,
        contactId: this.newContactId
      };
      console.log(this.depositAmountss)
  this.httpser.addCredit(this.depositAmountss).subscribe((data)=>{
console.log(data)
  })
  }
}

onWithdraw(){
  if (this.withdrawAmounts && this.newContactId !== undefined) {
    this.withdrawAmountss = {
      balance: this.withdrawAmounts,
      contactId: this.newContactId
    };
this.httpser.takeWithdraw(this.withdrawAmountss).subscribe((data)=>{
  console.log(data)
})
}
}
  onTransfer(){
    if (this.transferAmounts && this.newContactId && this.receiver_accc !== undefined) {
      this.transferAmountss = {
        balance: this.transferAmounts,
        contactId: this.newContactId,
        receiver_acc:this.receiver_accc
      };
  this.httpser.sendTransfer(this.transferAmountss).subscribe((data)=>{
    console.log(data)
  })
  }
  }
}

