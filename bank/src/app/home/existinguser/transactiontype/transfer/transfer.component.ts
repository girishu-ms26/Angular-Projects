import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  opensweetalert1(){
    Swal.fire(
      'Transfer',
      'Successfull !!',
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
