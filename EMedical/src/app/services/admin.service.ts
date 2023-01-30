import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdminauthenticationStatus } from "../models/adminauthenticationstatus.model";

@Injectable()
export class AdminService{
    constructor(private httpClient: HttpClient){}
    authenticate(
        username: String,
        password: string
    ): Observable<AdminauthenticationStatus>{
        console.log(username, password);
        let body={
            username: username,
            password: password,
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
        });
        return this.httpClient.post<AdminauthenticationStatus>(
            'http://localhost:8899/api/v1/admin',
            body,
            {
                headers: headers,
            }
        );
    }
}