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

    getTopicsByUser(userId:string): Observable<any>{
      // definir las cabeceras
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

     // hacer peticion ajax
     return this._http.get(this.url+'user-topics/'+userId, {headers: headers});
    }

    getTopic(id:string): Observable<any>{
     // hacer peticion ajax
     return this._http.get(this.url+'topic/'+id);
    }

    update(token: string, id: string, topic: any): Observable<any>{
      let params = JSON.stringify(topic);

      // definir las cabeceras
      let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                     .set('Authorization', token);

     // hacer peticion ajax
     return this._http.put(this.url+'topic/'+id, params, {headers: headers});
    }

}
