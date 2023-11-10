import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

import { Mydatanewq } from '../queriesadmin/queriesadmin.component';
import { Mydatanewquery } from '../queries/queries.component';
import { Gggggquerytrans } from 'src/app/models/gggggquerytrans';

@Component({
  selector: 'app-querysolution',
  templateUrl: './querysolution.component.html',
  styleUrls: ['./querysolution.component.css']
})
export class QuerysolutionComponent {
  ContactId: string | null | undefined;
  NewContactId: number | null | undefined;

  public newData:Gggggquerytrans[] = []  as Gggggquerytrans[];
  constructor(private activatedRoute:ActivatedRoute,private httpser: ContactService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>
    this.ContactId=param.get('contactId'))
    this.NewContactId=Number(this.ContactId)
    this.httpser.getByQueryId(this.NewContactId).subscribe((data)=>{
    console.log(data)
    this.newData=data
   })
  } 
 
}
