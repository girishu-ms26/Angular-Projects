import { Component, OnInit } from '@angular/core';
import { CitizenService } from '../Services/citizen.service';
import { Citizen } from 'src/app/Models/Citizen.model';
import { Router,ActivatedRoute } from '@angular/router';
import { NgModel,NgForm, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-citizen',
  templateUrl: './update-citizen.component.html',
  styleUrls: ['./update-citizen.component.css']
})
export class UpdateCitizenComponent implements OnInit {
  
  constructor(private citizenService:CitizenService,private router: Router,private activatedRoute: ActivatedRoute) { }  
  
  citizen!:Citizen;
  ngOnInit(): void {
   const refid:Number = this.activatedRoute.snapshot.params['refid'];
   //const refid:Number = this.activatedRoute.snapshot.queryParams['refid'];
   this.citizenService.getCitizen(refid).subscribe((citi)=>{this.citizen = citi});  
  }
  updateCitizen(form:NgForm){
    this.citizenService.updateCitizen(
      form.value.refid,
      form.value.uid,
      form.value.vstatus,
      form.value.first_name,
      form.value.middle_name,
      form.value.last_name,
      form.value.age,
      form.value.gender,
      form.value.email,
      form.value.phno
      ).subscribe();
    return this.router.navigateByUrl('/list');
  }
}


