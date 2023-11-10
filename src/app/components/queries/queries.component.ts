import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { Mydatanewq } from '../queriesadmin/queriesadmin.component';
import { Gggggquerytrans } from 'src/app/models/gggggquerytrans';

export interface Myquery{
  content:string;
}

export interface Mydataquery{
  content:string;
  custId:number
}

export interface Mydatanewquery{
  queryId?: number;
  content: string;
  adminResponse:string; 
  custId: number;
}

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent{
  ContactId: string | null | undefined;
  NewContactId: number | null | undefined;

  public query:string=''
  public newquery:Mydataquery ={} as Mydataquery;
  public newData:Gggggquerytrans[] = []  as Gggggquerytrans[];
  constructor(private activatedRoute:ActivatedRoute,private httpser: ContactService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>
    this.ContactId=param.get('contactId'))
    this.NewContactId=Number(this.ContactId)
    this.httpser.getByQueryId(this.NewContactId).subscribe((data)=>{
     console.log(data);
    this.newData=data
    })
  }
 
  onQuery(){
    this.newquery.content=this.query
    if(this.NewContactId){
    this.newquery.custId=this.NewContactId
    }
  this. httpser.sendQuery(this.newquery).subscribe((data)=>{
  console.log(data)
  })
  }
}
