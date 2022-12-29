import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  public tagList: any;
  list: any;

  constructor(private http:HttpClient){
     
  }
  ngOnInit() : void{
    this.getTags();
  }
  public getTags(){
    this.http.get('https://api.codingninjas.com/api/v3/event_tags').subscribe((data) =>{
      console.log(data);
      this.tagList=data;
    });
  } 
  tagfilter(tag: any){
    // console.log('clicked');
    // console.log(tag);
    if(this.list == undefined)
    this.list=tag;
    else
    this.list+=" "+tag;

    console.log(this.list);
  }
}
