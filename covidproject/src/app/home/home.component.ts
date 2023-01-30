import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  opensweetalert(){
    Swal.fire(
      'Contact us on',
      'Ph no: +919999999999 & Email: 123@123.com',
      'success'
    ).then(ok => {
      if (ok) {
       window.location.href=" ";
      }
    }
    )};
}
