import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { ContactService } from 'src/app/services/contact.service';
export interface UserData {
  userId: bigint;
  username: string;
  password: string;
  roleName: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
public login:Login={} as Login;


 public userdata:UserData[]=[] as UserData[];
 // @Output () todoAdd:EventEmitter<number>=new EventEmitter();
  public id:bigint|null=null;
  
  constructor(private router:Router,private httpser :ContactService){
    console.log(this.id)
  }
  
        
      
  
  ngOnInit(): void {
   this.httpser.getUsers().subscribe((data)=>{
     this.userdata=data
   })
   
  }
  onSubmit() {
    if (this.login.role === "admin" && this.login.userid === "123gk" && this.login.password === "12345") {
      this.router.navigate(["/contacts/adminhome"]).then();
    } else {
      let userFound = false;
      for (const udata of this.userdata) {
        if (this.login.role === udata.roleName && this.login.userid === udata.username && this.login.password === udata.password) {
          userFound = true;
          this.id = udata.userId;
         // this.todoAdd.emit(this.id);
          this.router.navigate([`/contacts/userhome/${this.id}`]).then();
          break; 
        }
      }
      if (!userFound) {
        this.router.navigate(["/contacts/login"]).then();
      }
    }
  }
}
