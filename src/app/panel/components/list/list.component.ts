import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService, TopicService]
})
export class ListComponent implements OnInit {

  public page_title: string;
  public topics: any;
  public identity: any;
  public token: any;
  public status: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    private _topicService:TopicService
  ){
    this.page_title = "Topic List";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(){
    var userId = this.identity._id;
    this._topicService.getTopicsByUser(userId).subscribe(
      response => {
        if(response.topics){
          this.topics = response.topics;
          // console.log(response);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteTopic(id: string){
    this._topicService.delete(this.token, id).subscribe(
      response => {
        // si lo borra actualizo el listado de los topics
        this.getTopics();
      },
      error => {
        console.log(error);
      }
    );
  }


}
