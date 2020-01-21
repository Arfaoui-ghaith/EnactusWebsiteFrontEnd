import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpclient:HttpClient) { }

  getevents(){
     return this.httpclient.get('http://localhost:8000/api/events');
  }
}
