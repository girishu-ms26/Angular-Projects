import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminauthenticationStatus } from '../models/adminauthenticationstatus.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminauthenticationstatus : AdminauthenticationStatus |undefined;
  constructor(
  private adminService: AdminService,
  private router: Router,
  private route: ActivatedRoute
  ){}
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.value.username, form.value.password);

    this.adminService
    .authenticate(form.value.username, form.value.password)
    .subscribe((res) => {
      this.adminauthenticationstatus = res;
      if (this.adminauthenticationstatus.adminauthenticated) {
        alert("invalid")
        this.router.navigate(['/admin'], {relativeTo: this.route});
      }
      else {
        alert("Successfully logged in!")
        this.router.navigate(['/adminpage'], { relativeTo: this.route});
        form.reset();
}
});
}
} 
  
