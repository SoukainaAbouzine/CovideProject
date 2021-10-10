import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {MessageService} from '../services/message.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  alert:boolean=false
   addMessage= new FormGroup(
     {
       name:new FormControl(''),
       email:new FormControl(''),
       message: new FormControl('')
     }

   )
  constructor(private msgService :MessageService) { }



  ngOnInit() {}
  /*submitForm() {
    const message = 'My name is. My email is ${this.email}. My message is ${this.message}';
    alert(message);
  }*/
 /* getMessage(){
    this.messageService.findAll()
           .subscribe ( messages=>this.messages=messages);
}*/

collectData(){
  //console.warn(this.addMessage.value)
  this.msgService.saveData(this.addMessage.value).subscribe((result)=>{
   this.alert=true
  })
   this.addMessage.reset({})
}

closeAlert(){ this.addMessage.reset
  this.alert=false
}


}
