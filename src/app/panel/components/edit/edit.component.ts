import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService, TopicService]
})
export class EditComponent implements OnInit {
    public page_title: string;
    public topic: Topic;
    public identity: any;
    public token: any;
    public status: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    private _topicService:TopicService
  ){
    this.page_title = "Edit Topic";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.topic = new Topic('','','','','','',this.identity._id, null);
  }
  ngOnInit(): void {
  }

  onSubmit(form:any){

  }

}
