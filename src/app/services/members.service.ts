import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
   members:any;
  constructor(private httpclient:HttpClient) { }

   getMembers(){
     return  this.httpclient.get('http://admin.enactusisetch.tn/api/members');
  }
}
