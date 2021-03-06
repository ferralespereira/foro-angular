import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class UserService{
  public url: string;
  public identity: any;
  public token: any;

    constructor(private _http: HttpClient){
      this.url = global.url;
    }

    prueba(){
        return "Hola desde el user service de angular";
    }

    register(user:any): Observable<any>{
      // convertir el objeto del usuario a un json string
      let params = JSON.stringify(user);

      // definir las cabeceras
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      // hacer peticion ajax
      return this._http.post(this.url+'register', params, {headers: headers});

    }

    signup(user:any, gettoken = null):Observable<any>{
      // comprobar si llega el gettoken
      if(gettoken != null){
        user.gettoken = gettoken;
      }

      // convertir el objeto del usuario a un json string
      let params = JSON.stringify(user);

      // definir las cabeceras
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      // hacer peticion ajax
      return this._http.post(this.url+'login', params, {headers: headers});

    }

    getIdentity(){
      let identity:any = localStorage.getItem('identity');
      identity = JSON.parse(identity);

      if(identity && identity != null && identity != undefined && identity != "undefined"){
          this.identity = identity;
      }else{
        this.identity = null;
      }

      return this.identity;
    }

    getToken(){
      let token:any = localStorage.getItem('token');

      if(token && token != null && token != undefined && token != "undefined"){
          this.token = token;
      }else{
        this.token = null;
      }

      return this.token;
    }

    update(user:any):Observable<any>{
        let params:any = JSON.stringify(user);

        let headers:any = new HttpHeaders().set('Content-type', 'application/json')
                                           .set('Authorization', this.getToken());

        return this._http.put(this.url+'user/update', params, {headers: headers});

    }

    getUsers():Observable<any>{
      return this._http.get(this.url+'users');
    }

    getUser(userId:string):Observable<any>{
      return this._http.get(this.url+'user/'+userId);
    }

}
