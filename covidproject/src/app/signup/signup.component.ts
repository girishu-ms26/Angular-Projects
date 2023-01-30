import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  opensweetalert() {
    Swal.fire(
      'SignUp Successful !!',
      '',
      'success',
    ).then((ok) => {
      if (ok) {
        window.location.href = ' '
      }
    })
  }

}
