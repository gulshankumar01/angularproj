import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-approveregister',
  templateUrl: './approveregister.component.html',
  styleUrls: ['./approveregister.component.css']
})
export class ApproveregisterComponent implements OnInit {
  public userreg: User = {} as User;
  public newuserreg: User = {} as User;
  public id: string | undefined;
  public ContactId: number | null = null;

  constructor(private https: ContactService, private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param) => {
      const id = param.get('contactId');
      if (id !== null && id !== undefined) {
        this.id = id;
        this.ContactId = Number(id)
      } else {
        // Handle the case where 'id' is null or undefined, if needed.
      }
    });
     if(this.ContactId){
    this.https.getRequestedAccounById(this.ContactId).subscribe((data)=>{
      this.userreg=data
  })
  }
}
onRegter(){
  this.newuserreg.address=this.userreg.address,
  this.newuserreg.email=this.userreg.email,
  this.newuserreg.firstname=this.userreg.firstname
  this.newuserreg.lastname=this.userreg.lastname
  this.newuserreg.password=this.userreg.password
  this.newuserreg.phone=this.userreg.phone
  this.newuserreg.username=this.userreg.username
  this.https.postRequsetedAccount(this.newuserreg).subscribe((data)=>{
console.log(data)
window.location.reload();
  })
}
}
