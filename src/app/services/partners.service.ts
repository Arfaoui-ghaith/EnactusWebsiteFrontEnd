import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  constructor(private httpclient:HttpClient) { }

  getPartners(){
     return this.httpclient.get('http://enactusisetch.rf.gd/api/partners');
  }
}
