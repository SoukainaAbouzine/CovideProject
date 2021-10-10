import { Injectable } from '@angular/core';

  import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SendMsg } from '../models/send-msg';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  url=" http://localhost:3000/comment"
  constructor(private http: HttpClient) { }

  saveData(data){
    //console.warn("service",data)
   return this.http.post(this.url,data)

  }
deleteMsg(id){
     return this.http.delete("http://localhost:3000/comment/"+id)
  }

}
