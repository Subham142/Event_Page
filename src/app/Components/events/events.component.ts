import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  public eventList: any;
  constructor(private http:HttpClient){
     
  }
  ngOnInit() : void{
    this.getevents();
  }
  public getevents(){
    this.http.get('https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=Upcoming&tag_list=&offset=0').subscribe((data) =>{
      console.log(data);
      this.eventList=data;
    });
  } 
}
