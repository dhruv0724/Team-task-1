import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as teams from '../mockteams.json';
import * as users from '../mockusers.json';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  teams:any;
  teamName: any;
  constructor( private router:Router,private common:CommonService) 
  { this.users=users.default}

 
  ngOnInit(): void {
    
    this.users = this.users.filter((e:any)=>{
    this.teamName = this.common.getTeam();
    return this.common.getData().members.includes(e.id)?true:false
    })



    
  }

}
