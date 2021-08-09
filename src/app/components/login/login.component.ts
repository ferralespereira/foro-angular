import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;

  constructor(
    private _userService:UserService
  ){
    this.page_title = "Login";
    this.user = new User('','','','','','','ROLE_USER');
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    // this._userService.register(this.user).subscribe(
    //   response => {
    //     if(response.user && response.user._id){
    //       this.status = 'success';
    //       form.reset();
    //     }else{
    //       this.status = 'error';
    //     }
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    console.log(this.user);
  }

}
