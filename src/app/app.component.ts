import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  title = 'foro-angular';
  public identity: any;
  public token: any;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
  }

  ngOnInit(){
    console.log(this.identity);
    console.log(this.token);
  }

  ngDoCheck(){
    // cuando cambie esta var me la va a acualizar
    this.identity = this._userService.getIdentity();
  }

  logOut(){
    localStorage.clear();
    this.identity = null;
    this.token = null;

    this._router.navigate(['login']);
  }


}
