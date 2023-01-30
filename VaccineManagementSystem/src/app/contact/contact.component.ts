import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

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
