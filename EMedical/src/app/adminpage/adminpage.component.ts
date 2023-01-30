import { Component, OnInit } from '@angular/core';
import { medicines } from '../models/medicines.model';
import { MedicineService } from '../services/medicines.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  medicines:medicines[] |undefined;
  
  constructor(private medicineService:MedicineService) { }

  ngOnInit(): void {
    this.medicineService.getMedicines().subscribe((med)=>{this.medicines = med});
  }
  deleteMedicine(medicineId:number){
    this.medicineService.deleteMedicine(medicineId).subscribe();   
  }  
}
