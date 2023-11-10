import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
export interface MynewQuryUpdatee{
  queryId?: number;
  content: string;
  adminResponse:string; 
  custId: number;
 
}

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  public allquery:MynewQuryUpdatee[]=[] as MynewQuryUpdatee[];
  constructor(private http:ActivatedRoute,private https:ContactService){}
  ngOnInit(): void {
   this.https.getAllQuery().subscribe((data)=>{
this.allquery=data
   })
  }
 // public newid:any 
}
