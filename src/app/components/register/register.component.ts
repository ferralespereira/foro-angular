
import { Component, OnInit } from '@angular/core';
// importando modelo
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User;

  constructor(
      private _userService: UserService
  ){
    this.page_title = 'Register';
    this.user = new User('','','','','','','ROLE_USER');

  }

  ngOnInit(){
    console.log (this._userService.prueba());
  }

  onSubmit(form:any){
    console.log(this.user);
  }

}
