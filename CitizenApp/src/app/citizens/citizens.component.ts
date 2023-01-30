import { Component, OnInit } from '@angular/core';
import { CitizenService } from '../Services/citizen.service';
import { Citizen } from '../Models/Citizen.model';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-citizens',
  templateUrl: './citizens.component.html',
  styleUrls: ['./citizens.component.css']
})
export class CitizensComponent implements OnInit {

  citizens!:Citizen[];
  citizen!:Citizen;

  constructor(private citizenService:CitizenService) { }

  ngOnInit(): void {
    this.citizenService.listCitizens().subscribe((citi)=>{this.citizens = citi});        
  }

  deleteCitizen(refid:Number){
    this.citizenService.deleteCitizen(refid).subscribe();
    return window.location.reload();
  }
}