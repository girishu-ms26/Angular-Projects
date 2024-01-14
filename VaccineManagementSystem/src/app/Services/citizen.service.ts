import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Citizen } from '../Models/Citizen.model';


@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  constructor(private httpClient:HttpClient) { }
  
  addCitizen(uid:Number,vstatus:Number,first_name:String,middle_name:String,last_name:String,age:String,gender:String,email:String,phno:String): 
    Observable<Citizen>{
      console.log(uid,vstatus,first_name,middle_name,last_name,age,gender,email,phno);
      let body={
        uid:uid,
        vstatus:vstatus,
        first_name:first_name,
        middle_name:middle_name,
        last_name:last_name,
        age:age,
        gender:gender,
        email:email,
        phno:phno
      };
      let headers = new HttpHeaders({
        'content-type':'application/json',
      });
      return this.httpClient.post<Citizen>(
        'http://localhost:8080/vaccine-management-rest-api/api/citizens',
        body,
        {
            headers: headers,
        }
      );
    }
  listCitizens():Observable<Citizen[]>{
    return this.httpClient.get<Citizen[]>('http://localhost:8080/vaccine-management-rest-api/api/citizens');
  }

  deleteCitizen(refid:Number){
    return this.httpClient.delete(`http://localhost:8080/vaccine-management-rest-api/api/citizens/${refid});   
  }

  getCitizen(refid:Number):Observable<Citizen>{
    return this.httpClient.get<Citizen>(`http://localhost:8080/vaccine-management-rest-api/api/citizens/${refid}`);
  }

  updateCitizen(refid:Number,uid:Number,vstatus:Number,first_name:String,middle_name:String,last_name:String,age:String,gender:String,email:String,phno:String): 
    Observable<Citizen>{
      console.log(refid,uid,vstatus,first_name,middle_name,last_name,age,gender,email,phno);
      let body={
        refid:refid,
        uid:uid,
        vstatus:vstatus,
        first_name:first_name,
        middle_name:middle_name,
        last_name:last_name,
        age:age,
        gender:gender,
        email:email,
        phno:phno
      };
      let headers = new HttpHeaders({'content-type':'application/json'});
      return this.httpClient.put<Citizen>(
        'http://localhost:8080/vaccine-management-rest-api/api/citizens',
        body,
        {
            headers: headers,
        }
      );
    }

}