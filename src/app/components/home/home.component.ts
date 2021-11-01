import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {
  public page_title: string;
  public identity: any;

  constructor(
    private _userService: UserService
  ) {
    this.page_title = 'Welcome to the JForo';
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(): void {
  }

}
