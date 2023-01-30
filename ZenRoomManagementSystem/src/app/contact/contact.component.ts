import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  c = new Contact;
  msg='';
  constructor(private _service: ContactService) { }

  ngOnInit(): void {
  }

  contact(){
    this._service.contactFromRemote(this.c).subscribe(
      data => {
        console.log("response received");
        this.msg="Message Sent Successfully!! ";
      },
      error => { 
        console.log("exception occured");
        this.msg=error.error;
      }
  
    )
    }
  }


