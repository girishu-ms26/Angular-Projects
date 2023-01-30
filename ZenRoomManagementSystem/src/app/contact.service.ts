import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http:HttpClient) { }

  public contactFromRemote(c: Contact):Observable<any> {
    return this._http.post<any>("http://localhost:8088/contact", c)
  }
}
