import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable()
export class TopicService{
  public url: string;

    constructor(
      private _http: HttpClient
    ){
      this.url = global.url;
    }

    prueba(){
        return "Hola desde el topic service de angular";
    }

    addTopic(token:string, topic:any): Observable<any>{
      // convertir el objeto del topic a un json string
      let params = JSON.stringify(topic);

      // definir las cabeceras
      let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                     .set('Authorization', token);

     // hacer peticion ajax
     return this._http.post(this.url+'topic', params, {headers: headers});

    }

}
