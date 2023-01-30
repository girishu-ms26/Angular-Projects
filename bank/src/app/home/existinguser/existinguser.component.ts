import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-existinguser',
  templateUrl: './existinguser.component.html',
  styleUrls: ['./existinguser.component.css']
})
export class ExistinguserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  opensweetalert(){
    Swal.fire(
      'Login',
      'Successfull !!',
      'success'
    ).then(ok => {
      if (ok) {
       window.location.href = "Ttype";
      }
    }
     )} ;
}