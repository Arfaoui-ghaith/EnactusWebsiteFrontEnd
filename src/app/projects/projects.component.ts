import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsArray:any
  constructor(private membersService:ProjectsService) { }

  ngOnInit() {
    this.getProjectsData();
  }

  getProjectsData(){
      this.membersService.getProjects().subscribe(res=>{
         this.projectsArray=res;
      })
  }
}
