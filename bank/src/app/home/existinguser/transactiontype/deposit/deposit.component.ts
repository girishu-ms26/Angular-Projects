import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  opensweetalert(){
    Swal.fire(
      'Deposit',
      'Successfull !!',
      'success'
    ).then(ok => {
      if (ok) {
       window.location.href = " ";
      }
    }
  )};
  opensweetalert1(){
    Swal.fire(
      'OTP',
      'Sent !!',
      'success'
            )
  };
}