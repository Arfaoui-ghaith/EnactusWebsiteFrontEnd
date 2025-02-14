import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpclient:HttpClient) { }

  getProjects(){
     return this.httpclient.get('http://admin.enactusisetch.tn/api/projects');
  }
}
