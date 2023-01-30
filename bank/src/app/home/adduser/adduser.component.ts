import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  opensweetalert(){
    Swal.fire(
      'Congratulations',
      'Registration was Successful !! Login from Home Page',
      'success'
    ).then(ok => {
      if (ok) {
       window.location.href = " ";
      }
    }
     )} ;
}