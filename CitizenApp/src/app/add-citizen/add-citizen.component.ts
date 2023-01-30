import { Component, OnInit } from '@angular/core';
import { CitizenService } from 'src/app/Services/citizen.service';
import { Citizen } from 'src/app/Models/Citizen.model';
import { NgModel,NgForm, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-citizen',
  templateUrl: './add-citizen.component.html',
  styleUrls: ['./add-citizen.component.css']
})
export class AddCitizenComponent implements OnInit {

  constructor(private citizenService:CitizenService,private router:Router,private route:ActivatedRoute) { }
  citizen:Citizen | undefined;
  ngOnInit(): void {
  }
  addCitizen(form:NgForm){
    this.citizenService.addCitizen(form.value.uid,form.value.vstatus,form.value.first_name,form.value.middle_name,form.value.last_name,form.value.age,form.value.gender,form.value.email,form.value.phno).subscribe((add)=>{
      this.router.navigate(['/list'],{relativeTo:this.route});
    });
  }
}