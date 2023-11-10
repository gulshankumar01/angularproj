import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-adminacountrequest',
  templateUrl: './adminacountrequest.component.html',
  styleUrls: ['./adminacountrequest.component.css']
})
export class AdminacountrequestComponent implements OnInit {
  public Regdata:User[]=[] as User[];
  constructor(private https:ContactService,private routerlink:ActivatedRoute){}
  ngOnInit(): void {
    this.https.getRequestedAccoun().subscribe((data)=>{
      console.log(data)
      this.Regdata=data;
    })
  }
  
}
