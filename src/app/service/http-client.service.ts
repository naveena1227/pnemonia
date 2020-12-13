import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class patientList{
  public names:any[];
  constructor( 
               
  ) {}
} 
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  getPatients(){
    return this.httpClient.get<patientList>("http://10.197.0.55:30081/patients");
  }
}
