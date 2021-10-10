import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';
import {MessageService} from '../services/message.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  Contact: Contact[];

  constructor(private httpClient: HttpClient,public addMessage:MessageService) { }
  collection:any=[];
  ngOnInit() {

    this.httpClient.get(' http://localhost:3000/comment').subscribe((response: any) => {
      this.Contact = response;
    });
  }
 deleteMsg(item){
   console.warn(this.collection)
  this.collection.splice(item-1,1)
    this.addMessage.deleteMsg(item).subscribe((result)=>{

    })

  }
}

