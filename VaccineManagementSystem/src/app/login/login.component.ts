import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  loginsuccess() { 
    Swal.fire(
      'Login Successful !!',
      '',
      'success',
      ).then((ok) => {
        if (ok) {
        window.location.href = ' '
        }
      }   )
  }
}