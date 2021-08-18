import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {
  public page_title: string;
  public user: User;
  public identity: any;
  public token: any;
  public status: string;
  public afuConfig: any;
  public url: any;
  public resetVar: any;
  public message: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService
  ){
    this.page_title = 'User settings';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.status = '';
    this.url = global.url;
    this.message = '';

    this.afuConfig = {
      multiple: false,
      formatsAlowed: ".jpg, .jpeg, .png, .gif",
      maxSize: "50",
      uploadAPI: {
        url: this.url+"upload-avatar",
        headers: {
          "Authorization": this.token
        }
      },
      theme: "attachPin",
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      replaceTexts: {
        selectFileBtn: 'Select Files',
        resetBtn: 'Reset',
        uploadBtn: 'Upload',
        dragNDropBox: 'Drag N Drop',
        attachPinBtn: 'Attach Avatar...',
        afterUploadMsg_success: 'Successfully Uploaded !',
        afterUploadMsg_error: 'Upload Failed !',
        sizeLimit: 'Size Limit'
      }
    };
  }

  avatarUpload(data:any){

    this.user = data.body.user;

    // actualizo el identity en el localStorage
    localStorage.setItem('identity', JSON.stringify(data.body.user));

    // actualizo el token en el localStorage
    localStorage.setItem('token', data.body.token);

  }


  ngOnInit(): void {
  }


  onSubmit(form:any){

    this._userService.update(this.user).subscribe(
        response => {
          if(!response.user){
            this.status = 'error';
            this.message = response.message;
          }else{
            this.status = 'success';
            this.message = response.message;

            // actualizo el identity en el localStorage
            localStorage.setItem('identity', JSON.stringify(this.user));

            // actualizo el token en el localStorage
            localStorage.setItem('token', response.token);

            // reseteo el form
            form.reset();
          }
        },
        error => {
          this.status = 'error';
          this.message = error.message;
          console.log(error);
        }
    );
  }

}
