import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-admincustomer',
  templateUrl: './admincustomer.component.html',
  styleUrls: ['./admincustomer.component.css']
})
export class AdmincustomerComponent implements OnInit{
 public getdata:any;

  constructor(private httpser :ContactService ){}
  ngOnInit(): void {
    this.httpser.getCustomer().subscribe((data)=>{
      console.log(data)
   this.getdata=data
    })
  }

}
