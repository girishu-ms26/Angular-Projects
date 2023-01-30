import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

    salespersonlist: SalesPerson[]=[
        new SalesPerson("Sachin","Hadap","sh@gmail.com",50000),
        new SalesPerson("Virat","Kohli","vk@rcb.in",65000),
        new SalesPerson("Rohit","Sharma","rs@mi.in",75000),
        new SalesPerson("Jasprit","Bumrah","jb@mi.in",45000),
        new SalesPerson("Devdutt","Padikal","dp@rcb.in",55000),
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
