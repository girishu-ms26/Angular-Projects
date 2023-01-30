import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { medicines } from "../models/medicines.model";

@Injectable()
export class MedicineService{
    constructor(private httpClient:HttpClient){}
    add(
        medicineId:number,
        medicineName:string,
        manufacturedDate:string,
        type:string,
        price:number,
        description:string,
        expireDate:string,
        status:string
    ):Observable<medicines>{
        console.log(medicineId,medicineName,manufacturedDate,type,price, description,expireDate,status);
        let body={
            medicineId:medicineId,
            medicineName:medicineName,
            manufacturedDate:manufacturedDate,
            type:type,
            price:price,
            description:description,
            expireDate:expireDate,
            status:status,
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
        });
        return this.httpClient.post<medicines>(
            'http://localhost:8899/api/v2/medicines',
            body,
            {
                headers: headers,
            }
        );
    }

    getMedicines():Observable<medicines[]>{
        return this.httpClient.get<medicines[]>('http://localhost:8899/api/v2/medicines');
    }
    deleteMedicine(medicineId:number){
        return this.httpClient.delete(`http://localhost:8899/api/v2/medicines/${medicineId}`);        
    }    

}   