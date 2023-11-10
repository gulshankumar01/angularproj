import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fixeddeposit',
  templateUrl: './fixeddeposit.component.html',
  styleUrls: ['./fixeddeposit.component.css']
})
export class FixeddepositComponent implements OnInit{
  ContactId: string | null | undefined;

  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>
    this.ContactId=param.get('contactId'))
  }

}
