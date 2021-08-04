
import { Component, OnInit } from '@angular/core';
// importando modelo
import { User } from '../../../models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User;

  constructor() {
    this.page_title = 'Register';
    this.user = new User('','','','','','','ROLE_USER');

  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(this.user);
  }

}
