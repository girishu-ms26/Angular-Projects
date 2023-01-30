import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  Registrationsuccesss() {
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
