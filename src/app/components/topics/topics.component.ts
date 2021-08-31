import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Topic } from '../../models/topic';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
  providers: [TopicService]
})
export class TopicsComponent implements OnInit {
  public page_title: string;
  public topics: any;
  public totalPages: any;
  public page: any;
  public next_page: any;
  public prev_page: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _topicService: TopicService
  ) {
    this.page_title = "Topics";
  }


  ngOnInit(): void {
    this.getTopics(1);
  }

  getTopics(page = 1){
    this._topicService.getTopics(page).subscribe(
      response => {
        if(response.topics){
          this.topics = response.topics;

          // navegacion de paginacion


        }else{
          this._router.navigate(['/home']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
