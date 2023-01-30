import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  b = new Booking;
  msg='';
  constructor(private _service: BookingService) { }

  ngOnInit(): void {
  }
booking(){
  this._service.bookingFromRemote(this.b).subscribe(
    data => {
      console.log("response received");
      this.msg="Booking Successfully!! ";
    },
    error => { 
      console.log("exception occured");
      this.msg=error.error;
    }

  )

}
}
