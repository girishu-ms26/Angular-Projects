import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contactcovid',
  templateUrl: './contactcovid.component.html',
  styleUrls: ['./contactcovid.component.css'],
})
export class ContactcovidComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  opensweetalert() {
    Swal.fire(
      'Thank you for Contacting Us',
      'We will get back to you ASAP !!',
      'success',
    ).then((ok) => {
      if (ok) {
        window.location.href = ' '
      }
    })
  }
}
