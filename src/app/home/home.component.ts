import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as teams from '../mockteams.json';
import * as users from '../mockusers.json';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teams:any;
 
 
  constructor(
    private router:Router,
    private common:CommonService
  ) {
    this.teams=teams.default;
   }

  ngOnInit(): void {
  }


  userstab(obj:any, teamName:any, id:any){
    
    this.common.setData(obj, teamName,id);

    this.router.navigateByUrl('/members/'+id);
 
   

  
  }

}
