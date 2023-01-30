import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  opensweetalert1(){
    Swal.fire(
      'Withdrawal Successfull !!',
      'Collect Cash !!',
      'success'
    ).then(ok => {
      if (ok) {
       window.location.href = " ";
      }
    }
  )};
  opensweetalert(){
    Swal.fire(
      'OTP',
      'Sent !!',
      'success'
            )
  };
}