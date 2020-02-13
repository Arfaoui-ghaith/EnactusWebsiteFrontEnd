import { Component} from '@angular/core';
import { MembersService } from '../services/members.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  membersArray:any;

  constructor(private membersService:MembersService) { 
    
  }

  ngOnInit() {
    this.getMembersData();
  }

   getMembersData(){
      ( this.membersService.getMembers()).subscribe(res=>{
         this.membersArray=res;
      })
  }

  verif(ch:string){
    return ch == "member";
  }
}
