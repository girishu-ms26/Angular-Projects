import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
admin = new Admin();
msg='';
  constructor(private _service: AdminService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    this._service.loginAdminFromRemote(this.admin).subscribe(
      data => { console.log("response recieved")
      this._router.navigate(['/gallery'])
    },
      error =>{ 
        console.log("exception occured")
        this.msg="Invalid Credentials!"
    }
    )
  }

  }

