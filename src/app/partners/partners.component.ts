import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../services/partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  PartnersArray:any
  constructor(private partnersService:PartnersService) { }

  ngOnInit() {
    this.getPartnersData();
  }

  getPartnersData(){
      this.partnersService.getPartners().subscribe(res=>{
         this.PartnersArray=res;
      })
  }

}
