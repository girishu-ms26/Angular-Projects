import { Component, OnInit } from '@angular/core';
import { medicines } from '../models/medicines.model';
import { MedicineService } from '../services/medicines.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
medicines:medicines[] |undefined;
  constructor(private medicineService:MedicineService) { }

  ngOnInit(): void {
    this.medicineService.getMedicines().subscribe((med)=>{
      this.medicines = med;
    })
  }

}
