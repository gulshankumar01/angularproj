import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Mydatanewquery } from '../queries/queries.component';
import { Gggggquerytrans } from 'src/app/models/gggggquerytrans';
import { CustomerBtId } from '../userhome/userhome.component';

export interface Mydatanewq{
queryId?:number;
content:string;
adminResponse:string;
custId:number;
}

@Component({
  selector: 'app-queriesadmin',
  templateUrl: './queriesadmin.component.html',
  styleUrls: ['./queriesadmin.component.css']
})
export class QueriesadminComponent implements OnInit {

  public newDataQuery:Gggggquerytrans[] = [] as Gggggquerytrans[];
 // public newDataQ:CustomerBtId[] = [] as CustomerBtId[];
  constructor(private https:ContactService){}
  ngOnInit(): void {
    this.https.getAllQuery().subscribe((data)=>{
      console.log(data)
    this.newDataQuery=data;
    })
    this.https.getCustomer().subscribe((data)=>{
     console.log(data)})
  }
  
 
}
