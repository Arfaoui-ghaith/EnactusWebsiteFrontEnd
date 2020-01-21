import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventsArray:any
  constructor(private eventsService:EventsService) { }

  ngOnInit() {
    this.getEventsData();
  }

  getEventsData(){
      this.eventsService.getevents().subscribe(res=>{
         this.eventsArray=res;
      })
  }
}
