import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  public eventList: any;
  page: number =1;
 event_category="ALL_EVENTS";
  public tagList: any;
  list: any;

  url='https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category=Upcoming&tag_list=&offset=0';

   event_sub_category="Upcoming";
  public tag_list="Coding%20Concepts";
  // public offset=1;
 
  
constructor(private http:HttpClient){}
 
  ngOnInit() : void{
    this.getevents();
    // this.getTags();
  }
  // public getTags(){
  //   this.http.get('https://api.codingninjas.com/api/v3/event_tags').subscribe((data) =>{
  //     console.log(data);
  //     this.tagList=data;
  //   });
  // }

  

  solve_allevent(){
    console.log("clicked");
    this.event_category='ALL_EVENTS';  
    this.url='https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category=Upcoming&tag_list=&offset=0'
    console.log(this.url);
    this.getevents();
  }

  solve_webinar(){
    console.log("clicked");
    this.event_category='WEBINAR';
    console.log(this.event_category);
    this.url='https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category=Upcoming&tag_list=&offset=0'
    console.log(this.url);
    this.getevents();
  }
  solve_code(){
    console.log("clicked");
    this.event_category="CODING_EVENT"
    this.url='https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category=Upcoming&tag_list=&offset=0'
    console.log(this.url);
    this.getevents();
  }
  solve_boot(){
    console.log("clicked");
    this.event_category="BOOTCAMP_EVENT"
    this.url='https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category=Upcoming&tag_list=&offset=0'
    console.log(this.url);
    this.getevents();
  }
  solve_work(){
    console.log("clicked");
    this.event_category="WORKSHOP"
    this.url='https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category=Upcoming&tag_list=&offset=0';
    console.log(this.url);
    this.getevents();
  }
  getArchive(){
    this.event_sub_category = "Archived";
    this.url = 'https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category='+this.event_sub_category+'&tag_list=&offset=0';
    this.getevents(); 
  }

  getUpcoming(){
    this.event_sub_category = "Upcoming";
    this.url = 'https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category='+this.event_sub_category+'&tag_list=&offset=0';
    this.getevents(); 
  }

  getAllTimeFavorites(){
    this.event_sub_category = "All Time Favorites";
    this.url = 'https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category='+this.event_sub_category+'&tag_list=&offset=0';
    this.getevents(); 
  }
  public getevents(){
    this.http.get(this.url).subscribe((data) =>{
      console.log(data);
      this.eventList=data;
    });
  } 

  //  tagfilter(tag: any){
  //   // console.log('clicked');
  //   // console.log(tag);
  //   if(this.list == undefined)
  //   this.list=tag;
  //   else{
  //     const index: number = this.list.indexOf(tag);
  //     if(index == -1) {
  //       this.list+=" "+tag;
  //     }
  //     else{
  //       this.list.splice(index, 1);
  //     }
  //   }
  //   console.log(this.list)
  //   this.tagList=String(this.list);
  //   this.tagList= encodeURIComponent(this.tagList.trim());
  //   this.url = 'https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category='+this.event_sub_category+'&tag_list='+this.tagList+'&offset=0';
  //   console.log(this.url);
  //   this.getevents(); 

  //   console.log(this.tagList);
    
  // }
}
