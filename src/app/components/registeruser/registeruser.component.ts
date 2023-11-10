import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent {
  public userreg:User={} as User;
  constructor(private https:ContactService){}
  onRegter(){
this.https.sendRegister(this.userreg).subscribe((data)=>{
  console.log(data)
})
  }
}
