import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent {

  constructor(private api:ApiService){
    api.fetchNews().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  data:any=[]

}
