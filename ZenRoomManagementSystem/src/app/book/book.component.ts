import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor( private _router:Router) { }

  ngOnInit(): void {
  }
  gotobooking(){
    this._router.navigate(['/booking'])
  }
}
