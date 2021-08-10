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
  public status: string;
  public identity: any;
  public gettoken: any;
  public token: any;

  constructor(
    private _userService:UserService
  ){
    this.page_title = "Login";
    this.user = new User('','','','','','','ROLE_USER');
    this.status = "";
    this.gettoken = true;
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    // conseguir objeto completo del usuario logeado
    this._userService.signup(this.user).subscribe(
      response => {
        if(response.user && response.user._id){
          // guardamos el usuario en una propiedad
          this.identity = response;

          // conseguir el token del usuario identificado
          this._userService.signup(this.user, this.gettoken).subscribe(
            response => {
              if(response.token){
                // guardamos el token del usuario
                this.token = response.token;
              }else{
                this.status = 'error';
              }
            },
            error => {
              console.log(error);
            }
          );

        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
