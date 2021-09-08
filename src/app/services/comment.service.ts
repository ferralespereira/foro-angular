import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable()
export class CommentService{
  public url: string;

    constructor(
      private _http: HttpClient
    ){
      this.url = global.url;
    }


    add(token:string, comment:any, topicId:string): Observable<any>{
      // convertir el objeto del topic a un json string
      let params = JSON.stringify(comment);

      // definir las cabeceras
      let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                     .set('Authorization', token);

     // hacer peticion ajax
     return this._http.post(this.url+'comment/topic/'+topicId, params, {headers: headers});

    }

    delete(token: string, topicId:string, commentId:string): Observable<any>{
      // definir las cabeceras
      let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                     .set('Authorization', token);

     // hacer peticion ajax
     return this._http.delete(this.url+'commen/'+topicId+'/'+commentId, {headers: headers});
    }

}
