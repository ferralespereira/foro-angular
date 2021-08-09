import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class UserService{
  public url: string;

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

}
