import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(
  ) { }

  private data :any;
  private teamName: any;
  private id: any;

  setData(data:any, name: any,id:any){
    this.teamName = name;
    this.data = data;
    this.id = id;
    console.log("setData",this.data);
    
  }

  getData(){
    let temp = this.data;
    return temp;
  }

  getTeam(){
    let name = this.teamName;
    return name;
  }
 
  clearData(){
    this.data = undefined;
  }

}
