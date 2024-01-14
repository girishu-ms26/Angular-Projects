import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../Models/Admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  authenticateAdmin(username:String,password:String):
  Observable<any>{
    let body={
      username:username,password:password
    };
    let headers = new HttpHeaders({
      'content-type':'application/json',
    });
    return this.httpClient.post<Admin>(
      'http://localhost:8080/vaccine-management-rest-api/api/v1/admins',
      body,
      {
          headers: headers,
      }
    );
  }
}
