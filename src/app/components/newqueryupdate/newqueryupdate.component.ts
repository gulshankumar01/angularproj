import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gggggquerytrans } from 'src/app/models/gggggquerytrans';
import { ContactService } from 'src/app/services/contact.service';
import { MynewQuryUpdatee } from '../adminhome/adminhome.component';

@Component({
  selector: 'app-newqueryupdate',
  templateUrl: './newqueryupdate.component.html',
  styleUrls: ['./newqueryupdate.component.css']
})
export class NewqueryupdateComponent implements OnInit {
  ContactId: string | null | undefined;
  NewContactId: number | null | undefined;
  public allquery:MynewQuryUpdatee[]=[] as MynewQuryUpdatee[];
  public newData:Gggggquerytrans = {}  as Gggggquerytrans;
  constructor(private activatedRoute:ActivatedRoute,private httpser: ContactService,private router:Router){}

public query:string=''

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>
    this.ContactId=param.get('contactId'))
    this.NewContactId=Number(this.ContactId)
}

onQuery(){
  if(this.NewContactId)
  this.httpser.getUpdatedQuery(this.NewContactId).subscribe((data)=>{
console.log(data)
this.router.navigate(["/contacts/adminhome"]).then();
})
}
}